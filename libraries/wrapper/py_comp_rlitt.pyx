# cython: language_level=3

from libc.stddef cimport *
from libc.stdint cimport *
from cpython.mem cimport PyMem_Malloc, PyMem_Calloc, PyMem_Realloc, PyMem_Free

import cython

cdef extern from "storage_defs.h":
    cdef int STORE_DEFS_WRITE_SUCCESS
    ctypedef uint8_t (*storage_write_funptr_t)(const char *key,const char *index,const char *value)

cdef extern from "computation_defs.h":
    cdef int COMP_DEFS_CONFIG_SUCCESS
    cdef int COMP_DEFS_CONFIG_FAIL
    cdef int COMP_DEFS_COMPUTE_SUCCESS
    cdef int COMP_DEFS_COMPUTE_FAIL


cdef extern from "notation_wptt.h":
    cdef int NOTE_WPTT_DECODE_MAX_CHILDREN
    cdef int NOTE_WPTT_DECODE_MAX_WEIGHTS

    ctypedef enum note_wptt_order_e:
        NOTE_WPTT_ORDER_UNINIT
        NOTE_WPTT_ORDER_FORWARD
        NOTE_WPTT_ORDER_REVERSE

    ctypedef enum  note_wptt_V4_label_e:
        NOTE_WPTT_V4_LABEL_UNINIT
        NOTE_WPTT_V4_LABEL_NONE
        NOTE_WPTT_V4_LABEL_I
        NOTE_WPTT_V4_LABEL_X
        NOTE_WPTT_V4_LABEL_Y
        NOTE_WPTT_V4_LABEL_Z


    ctypedef struct note_wptt_node_buffer_t:
        note_wptt_node_t *buffer
        size_t            size
        size_t            idx

    ctypedef struct note_wptt_node_t:
        # Note: The 40 and 41 magic numbers align with the MAX_CN macro 
        note_wptt_node_t *children[40]
        int8_t                   weights[41]
        size_t                   number_of_children
        uint8_t                  number_of_rings
        note_wptt_order_e        order

    ctypedef struct note_wptt_t:
        note_wptt_node_t *       root
        note_wptt_node_buffer_t *node_buffer
        note_wptt_V4_label_e     label

    uint8_t note_wptt_encode(note_wptt_t wptt, char *str, size_t buffer_size)
    uint8_t note_wptt_decode(char *str, note_wptt_t *wptt)

cdef extern from "comp_rlitt_pure_vignette.h":

    ctypedef struct comp_rlitt_pure_vignette_config_t:
        storage_write_funptr_t        storage_write
        const note_wptt_t *           wptt 
    uint8_t comp_rlitt_pure_vignette_config(comp_rlitt_pure_vignette_config_t *config_arg)
    uint8_t comp_rlitt_pure_vignette_compute()



# This is local python write callback passed to the C code from pywrite. 
_writeCallback = None


cdef uint8_t pywrite(const char *key, const char *index, const char *value) noexcept:
    (<object>_writeCallback)(key.decode('utf-8'),index.decode('utf-8'),value.decode('utf-8'))
    return STORE_DEFS_WRITE_SUCCESS


def start_job(tangle, callback):
    # Starts a generation job using the gen rlitt c library 
    global _writeCallback
    cdef note_wptt_t tangle_note
    cdef note_wptt_node_buffer_t buffer
    cdef uint8_t res_val
    cdef comp_rlitt_pure_vignette_config_t config
    ret_val = True
    try:
        # Set up memory
        buffer.buffer = <note_wptt_node_t*>PyMem_Malloc(NOTE_WPTT_DECODE_MAX_CHILDREN*NOTE_WPTT_DECODE_MAX_CHILDREN* sizeof(note_wptt_node_t))
        buffer.size = NOTE_WPTT_DECODE_MAX_CHILDREN*NOTE_WPTT_DECODE_MAX_CHILDREN
        buffer.idx = 0
        tangle_note.node_buffer = &buffer
        
        _writeCallback = callback 
        config.storage_write = pywrite
        # Decode Notations  
        note_wptt_decode(bytes(tangle, encoding="ascii"), &tangle_note)

        config.wptt = &tangle_note

        # Run generator
        res_val = comp_rlitt_pure_vignette_config(&config)
        if COMP_DEFS_CONFIG_SUCCESS == res_val:
            res_val = comp_rlitt_pure_vignette_compute()
            if COMP_DEFS_COMPUTE_SUCCESS != res_val:
                ret_val = False
                raise NameError(
                    f'Computation went wrong in compute error is {res_val} tangle is {tangle}'
                ) from None  # @@@IMPROVEMENT: needs to be updated to exception object
        else:
            ret_val = False
            raise NameError(
                    'Computation went wrong in config'
                ) from None  # @@@IMPROVEMENT: needs to be updated to exception object
    finally:
        # Free memory
        PyMem_Free(buffer.buffer)
        ...

    return ret_val
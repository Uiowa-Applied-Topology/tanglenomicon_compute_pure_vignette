# cython: language_level=3

from libc.stddef cimport *
from libc.stdint cimport *
from cpython.mem cimport PyMem_Malloc, PyMem_Calloc, PyMem_Realloc, PyMem_Free

import cython

cdef extern from "storage_defs.h":
    cdef int STORE_DEFS_WRITE_SUCCESS
    ctypedef uint8_t (*storage_write_funptr_t)(const char *key,const char *index,const char *value)

cdef extern from "generator_defs.h":
    cdef int GEN_DEFS_CONFIG_SUCCESS
    cdef int GEN_DEFS_CONFIG_FAIL
    cdef int GEN_DEFS_GENERATION_SUCCESS
    cdef int GEN_DEFS_GENERATION_FAIL


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

cdef extern from "generator_rlitt.h":
    ctypedef enum  gen_rlitt_positivity_e:
        GEN_RLITT_UNINIT
        GEN_RLITT_POS
        GEN_RLITT_NEG
        GEN_RLITT_NEU

    ctypedef struct gen_rlitt_config_t:
        storage_write_funptr_t        storage_write
        const note_wptt_t **          rootstocks
        size_t                        rootstocks_len
        const note_wptt_t **          scions
        size_t                        scions_len
    uint8_t gen_rlitt_config(gen_rlitt_config_t *config_arg)
    uint8_t gen_rlitt_generate()



# This is local python write callback passed to the C code from pywrite. 
_writeCallback = None


cdef uint8_t pywrite(const char *key, const char *index, const char *value) noexcept:
    (<object>_writeCallback)(key.decode('utf-8'),index.decode('utf-8'),value.decode('utf-8'))
    return STORE_DEFS_WRITE_SUCCESS


def start_job(rootstocks, scions, callback):
    # Starts a generation job using the gen rlitt c library 
    global _writeCallback
    cdef gen_rlitt_config_t config
    cdef note_wptt_t **rs_list
    cdef note_wptt_t **sci_list
    cdef note_wptt_node_buffer_t buffer
    cdef uint8_t res_val
    ret_val = True
    try:
        # Set up memory
        rs_list =  <note_wptt_t**>PyMem_Calloc(len(rootstocks),sizeof(note_wptt_t*))
        sci_list=  <note_wptt_t**>PyMem_Calloc(len(scions),sizeof(note_wptt_t*))
        buffer.buffer = <note_wptt_node_t*>PyMem_Malloc(((len(rootstocks) + len(scions) )*NOTE_WPTT_DECODE_MAX_CHILDREN)* sizeof(note_wptt_node_t))
        buffer.size = NOTE_WPTT_DECODE_MAX_CHILDREN*(len(rootstocks) + len(scions))
        buffer.idx = 0
        _writeCallback = callback
        
        # Decode Notations 
        for i,rootstock in enumerate(rootstocks):
            rs_list[i] = <note_wptt_t*>PyMem_Malloc(sizeof(note_wptt_t))
            rs_list[i].node_buffer = &buffer
            note_wptt_decode(bytes(rootstock, encoding="ascii"), rs_list[i])

        for i,scion in enumerate(scions):
            sci_list[i] = <note_wptt_t*>PyMem_Malloc(sizeof(note_wptt_t))
            sci_list[i].node_buffer = &buffer
            note_wptt_decode(bytes(scion, encoding="ascii"), sci_list[i])

        # Initialization of generator config
        config.storage_write = pywrite
        config.rootstocks = <const note_wptt_t**>rs_list
        config.rootstocks_len = len(rootstocks)
        config.scions = <const note_wptt_t**>sci_list
        config.scions_len = len(scions)
        
        # Run generator
        res_val = gen_rlitt_config(&config)
        if GEN_DEFS_CONFIG_SUCCESS == res_val:
            res_val = gen_rlitt_generate()
            if GEN_DEFS_GENERATION_SUCCESS != res_val:
                ret_val = False
        else:
            ret_val = False
    finally:
        # Free memory
        for i,rootstock in enumerate(rootstocks):
            PyMem_Free(rs_list[i])
        PyMem_Free(rs_list)
        for i,scion in enumerate(scions):
            PyMem_Free(sci_list[i])
        PyMem_Free(sci_list)
        PyMem_Free(buffer.buffer)

    return ret_val
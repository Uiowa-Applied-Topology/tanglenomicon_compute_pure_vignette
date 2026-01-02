
add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/py_comp_rlitt.c
    DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/py_comp_rlitt.pyx
    VERBATIM
    COMMAND "${CYTHON}" --gdb "${CMAKE_CURRENT_SOURCE_DIR}/py_comp_rlitt.pyx" --output-file
    "${CMAKE_CURRENT_BINARY_DIR}/py_comp_rlitt.c")



python_add_library(py_comp_rlitt MODULE "${CMAKE_CURRENT_BINARY_DIR}/py_comp_rlitt.c"
    WITH_SOABI )
target_link_libraries(py_comp_rlitt PRIVATE
    tang_defs
    comp_rlitt_pure_vignette 
    notation_wptt
    storage_defs)
set_property(TARGET py_comp_rlitt PROPERTY C_STANDARD 99)
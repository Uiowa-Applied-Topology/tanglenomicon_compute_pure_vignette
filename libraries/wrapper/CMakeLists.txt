
add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/py_gen_rlitt.c
    DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/py_gen_rlitt.pyx
    VERBATIM
    COMMAND "${CYTHON}" --gdb "${CMAKE_CURRENT_SOURCE_DIR}/py_gen_rlitt.pyx" --output-file
    "${CMAKE_CURRENT_BINARY_DIR}/py_gen_rlitt.c")



python_add_library(py_gen_rlitt MODULE "${CMAKE_CURRENT_BINARY_DIR}/py_gen_rlitt.c"
    WITH_SOABI )
target_link_libraries(py_gen_rlitt PRIVATE
    generator_rlitt
    tang_defs
    generator_defs
    notation_wptt
    storage_defs)
set_property(TARGET py_gen_rlitt PROPERTY C_STANDARD 99)

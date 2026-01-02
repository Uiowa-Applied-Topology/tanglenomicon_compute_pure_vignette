# CMakeList.txt : CMake project for tanglenomicon, include source and define
# project specific logic here.
#
cmake_minimum_required(VERSION 3.12)

project(
        comp_rlitt
        LANGUAGES C CXX
        VERSION 0.0.1)

set(CMAKE_WINDOWS_EXPORT_ALL_SYMBOLS ON)


set(CMAKE_C_STANDARD 90)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED On)
set(CMAKE_CXX_EXTENSIONS Off)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})
set(TEST_RESULTS_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../tests/results/)

set(Python_ROOT_DIR ${CMAKE_CURRENT_SOURCE_DIR}/../.venv/bin)
set(Python3_EXECUTABLE ${CMAKE_CURRENT_SOURCE_DIR}/../.venv/bin/python)
set(Python3_FIND_VIRTUALENV "ONLY")
SET(ENV{VIRTUAL_ENV} "${CMAKE_CURRENT_SOURCE_DIR}/../.venv")

find_package(
        Python
        COMPONENTS Interpreter Development.Module
        REQUIRED)
find_program(CYTHON "cython")




set(CMAKE_C_FLAGS_DEBUG "-g -O0")
set(CMAKE_CXX_FLAGS_DEBUG "-g -O0")

add_subdirectory(core_lib/libraries)
################################################################################
# Start Compiler Defines
################################################################################

add_compile_definitions(UTIL_TANG_DEFS_MAX_CROSSINGNUM=40)

################################################################################
# Start Includes
################################################################################

enable_testing()
include(CTest)

add_subdirectory(core_lib/source/defs)
add_subdirectory(core_lib/source/note-wptt)
add_subdirectory(core_lib/misc/test_stubs/storage_stubs)
add_subdirectory(core_lib/source/comp-rlitt_pure_vignette)
add_subdirectory(wrapper)

################################################################################
# End Compiler Defines
################################################################################

################################################################################
# Start Extra Build Defines
################################################################################


################################################################################
# Start Extra Build Defines
################################################################################
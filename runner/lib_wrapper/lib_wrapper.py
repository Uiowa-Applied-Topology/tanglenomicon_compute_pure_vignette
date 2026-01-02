"""Wrapper for the cython rlitt generator component.

> [!note] The underlying component is not (as is) threadable.

"""

from collections.abc import Callable

import py_comp_rlitt


def run(tangles: str, write: Callable) -> bool:
    """Run the RLITT generator cython component.

    Args:
        tangles: The list of scion notations.
        write: The callback for storing the results.
    """
    if tangles:
        return py_comp_rlitt.start_job(tangles, write)
    else:
        return True
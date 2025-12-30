"""Wrapper for the cython rlitt generator component.

> [!note] The underlying component is not (as is) threadable.

"""

from collections.abc import Callable

import py_gen_rlitt


def run(rootstocks: list[str], scions: list[str], write: Callable) -> bool:
    """Run the RLITT generator cython component.

    Args:
        rootstocks: The list of rootstock notations.
        scions: The list of scion notations.
        write: The callback for storing the results.
    """
    if rootstocks and scions:
        return py_gen_rlitt.start_job(rootstocks, scions, write)
    else:
        return True

"""Holds and loads the configuration for the server."""

from pathlib import Path

import yaml

cfg_dict: dict


def load(path: Path):
    """Load configuration from file.

    Args:
        path: Path to the configuration file.

    Raises:
        NameError: Configuration file failed to load.
    """
    global cfg_dict
    path = Path.cwd() / path
    cfg_dict = dict()
    try:
        with open(path) as f:
            cfg_dict.update(yaml.load(f, Loader=yaml.FullLoader))
    except Exception:
        raise NameError(
            'config load error'
        ) from None  # @@@IMPROVEMENT: needs to be updated to exception object

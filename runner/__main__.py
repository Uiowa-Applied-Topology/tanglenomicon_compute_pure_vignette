"""Main entry point for the RLITT generator toolchain."""

from pathlib import Path

import typer
from pyfaktory import Client, Consumer

from . import config_store as cfg
from .fproducer import fproducer
from .fworker import fworker

app = typer.Typer()


@app.command()
def client(config: Path):
    """Client entry point.

    Args:
        config: The path to a configuration file.

    """
    cfg.load(config)
    fproducer.faktory_producer()


@app.command()
def worker(config: Path):
    """Worker entry point.

    Args:
        config: The path to a configuration file.

    """
    cfg.load(config)
    with Client(
        faktory_url=f'tcp://{cfg.cfg_dict["faktory-connection-info"]["domain"]}:{cfg.cfg_dict["faktory-connection-info"]["port"]}',
        role='consumer',
    ) as client:
        consumer = Consumer(client=client, queues=['arborescent'], concurrency=1)
        consumer.register('arbor_job', fworker.faktory_job)
        consumer.run()


if __name__ == '__main__':
    app()

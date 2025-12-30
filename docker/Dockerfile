FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim

RUN uv venv /opt/venv
# Use the virtual environment automatically
ENV VIRTUAL_ENV=/opt/venv
# Place entry points in the environment at the front of the path
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /code

COPY requirements.txt .

RUN uv pip install -r requirements.txt

COPY ./runner/ runner/

COPY ./libraries/.build libraries/.build

ENV CW_CFG="client"


CMD ["sh", "-c", "export PYTHONPATH=$PYTHONPATH:/code/libraries/.build/wrapper/ && export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/code/libraries/.build/wrapper/ && python -m runner $CW_CFG /config/config.yaml"  ]
set export

@_default:
    just --list


bootstrap:
    git submodule update --init --recursive
    if test ! -e .venv; then \
      uv venv && uv pip install -r requirements.txt ; \
    fi
    pre-commit install

check-prettier:
    prettier "docs/**/*.md" --check

do-prettier:
    prettier -w "docs/**/*.md"


check-ruff:
    ruff check runner/
    ruff format --check runner/

do-ruff:
    ruff format runner/

doc-serve: 
    mkdocs serve --livereload

test-all:
    pytest

# build the docs
docs:
    source .venv/bin/activate && \
    mkdocs build

[working-directory: 'libraries']
build-wrapper: bootstrap 
    source ../.venv/bin/activate && \
    cmake -G Ninja -B.build -DCMAKE_BUILD_TYPE=Production && cmake --build .build  

decrypt-sops:
    sops decrypt .sops/mongo.enc.yaml > .sops/mongo.yaml
    sops decrypt .sops/mongo_dev.enc.yaml > .sops/mongo_dev.yaml

encrypt-sops:
    sops encrypt .sops/mongo.yaml > .sops/mongo.enc.yaml
    sops encrypt .sops/mongo_dev.yaml > .sops/mongo_dev.enc.yaml


build-docker: build-wrapper
     docker build -t faktory_python -f ./docker/Dockerfile . 
     docker build -t faktory_prom -f ./docker/prometheus_reporting/Dockerfile . 

run-docker: 
    docker compose -f ./docker/docker-compose.yaml up -d --build 

stop-docker: 
    docker compose -f ./docker/docker-compose.yaml down

go: build-docker docs run-docker
    echo "done!"
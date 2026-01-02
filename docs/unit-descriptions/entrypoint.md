# Typer Entry Point

## Description

An entry point for the Python portion of the RLITT generator toolchain. The entry point exposes a
command line interface utilizing the [Typer](https://typer.tiangolo.com/) library. Two interfaces
are offered, one that starts the tool in producer mode and one that starts the tool in worker mode.

### Public Interfaces

#### Producer Mode

In producer mode the tool generates and enqueues new jobs.

##### State machine

```mermaid
stateDiagram-v2
    state "Load configuration." as lc
    state "Generate jobs" as gj

    state if_state <<choice>>

    [*]--> lc
    lc --> gj
    gj --> if_state
    if_state --> gj: No error detected
    if_state --> [*]: Error state

```

#### Worker Mode

The worker mode for the tool subscribes to and

##### State machine

```mermaid
stateDiagram-v2
    state "Load configuration." as lc
    state "Get job" as gj
    state "Process job" as pj

    state if_state <<choice>>

    [*]--> lc
    lc --> gj
    gj --> pj
    pj --> if_state
    if_state --> gj: No error detected
    if_state --> [*]: Error state

```

## Unit test description

## Implementation

<!-- prettier-ignore-start -->
::: runner.__main__
    :docstring: 
    :members:

<!-- prettier-ignore-end -->

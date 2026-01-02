# Worker Mode

## Description

This unit describes the functionality for the system's worker mode. When running we expect $n$
instances of the worker to run simultaneously.

### Public Interfaces

#### Faktory Worker

The Faktory worker interface serves as the primary entry point for worker mode. The interface
retrieves and processes tangle generation jobs distributed by Faktory.

##### State Machine

```mermaid
stateDiagram-v2
    state "Await job" as rj
    state "Create instance of worker class" as grp
    state "Process job" as gsp
    state error <<choice>>

    [*]--> rj
    rj --> grp
    grp --> gsp
    gsp --> error
    error --> rj : Else
    error --> [*]: Error
```

### Private interface

#### Class Worker

The worker class describes the data and methods needed for an atomic generation job.

##### Process Job

The process job method contains the core logic of the worker class. The method connects to the
MongoDB tangle collection and retrieves the page pointed to by the job data. The method then calls
the low-level computation code to compute new tangle data from the pages.

###### State Machine

```mermaid
stateDiagram-v2
    state "Retrieve job" as rj
    state "Get page" as gp

    state "Compute on page" as snt
    state "Write computed data" as wcd
    state "Report job results" as rjr

    [*]--> rj
    rj --> gp
    gp --> snt
    snt --> wcd
    wcd --> rjr
    rjr --> [*]

```

## Unit test description

### Process Job

Unit test description is problematic without a unit test framework.

<!-- prettier-ignore-start -->

## Implementation

<!-- prettier-ignore-start -->
::: runner.fworker.fworker
    :docstring: 
    :members:

<!-- prettier-ignore-end -->

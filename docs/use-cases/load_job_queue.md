# Load Job Queue

## Primary actor

- Empty Job Queue.

## Trigger

Faktory reports that the job queue is empty.

## Goal

The job queue is refilled.

## Preconditions

The stencil and tangle long term storage are connected.

## Scenario

1. Faktory reports that the job queue is empty.
2. Stencil for active TCN are completed.
3. Stencil configuration is updated.
4. Stencils for next TCN are processed.
    1. Tangles are paginated into jobs.
    2. Stencils are marked complete.
5. New jobs are reported to Faktory.

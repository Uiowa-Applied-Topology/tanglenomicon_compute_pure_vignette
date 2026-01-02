# Process Job

## Primary actor

Job Received

## Trigger

A job is received from Faktory for processing.

## Goal

A job is processed.

## Preconditions

- A connection to Faktory is made.
- Long term storage is attached.

## Scenario

1. Faktory distributes a job.
2. The page for the job is retrieved from long term storage.
3. The page is computed on.
4. Resulting computed values are inserted into storage.

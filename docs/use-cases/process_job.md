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
2. The pages for the job is retrieved from long term storage.
3. The pages are grafted together.
4. Resulting tangles are inserted into storage.
5. Ungood versions of these tangles are grafted.
6. Resulting ungood tangles are written to long term storage.

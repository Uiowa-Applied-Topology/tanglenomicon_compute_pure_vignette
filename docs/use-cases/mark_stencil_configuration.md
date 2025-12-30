# Mark Stencil Configuration

## Primary actor

N/A

## Trigger

An upstream actor wants to update the stencil configuration in long term storage.

## Goal

The state of the stencil configuration document in long term storage is updated.

## Preconditions

- Long term storage is attached.
- The configuration document is loaded.

## Scenario

1. An actor initiates a use case which updates the stencil configuration state.
2. The stencil configuration is written to long term storage.
3. The stencil configuration is verified in long term storage.

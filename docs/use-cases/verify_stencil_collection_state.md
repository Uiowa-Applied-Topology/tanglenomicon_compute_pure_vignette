# Verify Stencil Collection State

## Primary actor

N/A

## Trigger

An upstream actor wants to verify the state of the stencil collection.

## Goal

The stencil collection state is verified to be correct or is corrected.

## Preconditions

Long term storage is attached.

## Scenario

1. An actor initiates the verification of the stencil collection state.
2. For the active TCN the stencils are verified not to be in an open state.
3. Any open stencils are sent for processing.

# Mark Stencil Complete

## Primary actor

N/A

## Trigger

An upstream actor needs to update the state of a stencil.

## Goal

A stencil in long term storage has its state updated.

## Preconditions

- Long term storage is connected.
- A stencil is loaded.

## Scenario

1. An actor initiates a use case which updates a stencil state.
2. A stencil found in long term storage.
3. The stencil is marked as `complete`.

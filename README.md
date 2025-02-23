# Expo CLI Build Hang

This repository demonstrates a bug where the Expo CLI build process hangs indefinitely on a CI/CD environment without providing any useful error messages. The project builds successfully on a local development machine but fails consistently in the CI/CD pipeline.  The issue seems to be related to the Metro bundler not completing its task.

## Steps to Reproduce

1. Clone this repository.
2. Attempt to build the project using Expo CLI in your CI/CD environment (e.g., GitHub Actions, CircleCI).
3. Observe the build process hanging without any informative error messages in the logs.

## Expected Behavior

The Expo CLI should complete the build process and either succeed or provide meaningful error messages if issues are encountered.

## Actual Behavior

The Expo CLI build process hangs indefinitely, with the Metro bundler seemingly stuck in a loop. No specific errors or warnings are reported.

## Solution

A solution is provided in `expoBugSolution.js` showing how to use a `--max-workers` flag to potentially address the bundler issue.  This flag limits the number of worker processes used for bundling.  Experimentation with different worker counts might be necessary to find what works best for the given system and CI setup. Additional configuration like network timeouts may also need to be investigated.
// expoBugSolution.js
// Solution: Add --max-workers flag to limit worker processes during bundler operation. Experiment with the number to find a suitable value.
expo build:ios --max-workers 2
expo build:android --max-workers 2
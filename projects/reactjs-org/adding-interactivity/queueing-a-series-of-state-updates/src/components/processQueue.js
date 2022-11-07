export function getFinalState(baseState, queue) {
  let finalState = baseState;

  // Validate queue
  if (!Array.isArray(queue)) {
    return finalState;
  }

  // Calculate
  for (const q of queue) {
    switch (typeof q) {
      case "function":
        finalState = q(finalState);
        break;

      default:
        finalState = q;
        break;
    }
  }

  return finalState;
}

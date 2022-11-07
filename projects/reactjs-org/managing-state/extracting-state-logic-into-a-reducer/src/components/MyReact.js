import { useState } from "react";

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    setState((s) => reducer(s, action));
  }

  return [state, dispatch];
}

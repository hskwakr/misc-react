import React from "react";

export type AppProps1 = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** an object with known properties (but could have more at runtime) */
  obj: {
    id: string;
    title: string;
  };
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];
  /** any non-primitive value - can't access any properties (NOT COMMON but useful as placeholder) */
  obj2: object;
  /** an interface with no required properties - (NOT COMMON, except for things like `React.Component<{}, State>`) */
  obj3: {};
  /** a dict object with any number of properties of the same name */
  dict1: {
    [key: string]: MyTypeHere;
  };
  /** equivalent to dict1 */
  dict2: Record<string, MyTypeHere>;
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick1: () => void;
  /** function with named prop (VERY COMMON) */
  onChange1: (id: number) => void;
  /** function type syntax that takes an event (VERY COMMON) */
  onChange2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick2: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function;
  /** an optional prop (VERY COMMON) */
  optional?: OptionalType;
  /** when passing down the state setter function returned by `useState` */
  setState: React.Dispatch<React.SetStateAction<number>>;
};

type MyTypeHere = undefined;
type OptionalType = undefined;

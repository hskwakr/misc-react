import React from "react";

export declare interface AppProps2 {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: JSX.Element; // a single React element
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event target.
  props: Props & React.ComponentPropsWithoutRef<"button">; // to impersonate all the props of a button element and explicity not fowarding its ref. 
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref.
}

type Props = undefined;
type MyButtonWithForwardRef = any;

# Typing Component Props

This is intended as a basic orientation and reference for React developers familiarizing with TypeScript.

## Basic Prop Types Examples

A list of TypeScript types you will likely use in a React+TypeScript app:

Notice we have used the TSDoc /** comment */ style here on each prop. You can and are encouraged to leave descriptive comments on reusable components. For a fuller example and discussion, see our Commenting Components section in the Advanced Cheatsheet.

### More on object types: object, {}, etc

In Typescript, it's generally best to use specific types for objects. In most cases, this means a literal type like { id: string; name: string }. In cases where there isn't a fixed structure for an object, you likely either want an index signature (possibly with the Record shorhand) - if there are values of a certain type, but the keys can change - or else generics - if the object structure is more-or-less an arbitrary black-box.

Another approach to objects is the Map data structure, but this is somewhat uncommon to use in React, because React prefers data to be changed immutably (e.g. setUser({...user, name: newName})), while Maps are mutable data structures.

"Vague" object types like object, {} are fairly niche and should be rarely used, and may function differently than you expect. objet is any non-primitive value: this includes things like functions and arrays and constructors,
not just "simple" objects. And {} is perhaps better thought of as "an interface with no required properties", not "an empty object" - in practice this type allows anything except null or undefined. Object behaves the same as {} and is basically never used.

## Useful React Prop Type Examples

Relevant for components that accept other React components as props.

### SmallReact.ReactNode edge case before React 18

Before the React 18 type updates, this code typechecked but had a runtime error:

```
type Props = {
    children?: React.ReactNode;
}

function Comp({ children }: Props) {
    return <div>{children}</div>;
}

function APp() {
    // before React 18: Rnutime error "Objects are not valid as a React child"
    // after React 18: Typecheck error "Type '{}' is not assignable to type 'ReactNode'"
    return <Comp>{{}}</Comp>
}
```

This is because ReactNode includes ReactFragment which allowed type {} before React 18.

### JSX.Element vs React.ReactNode?

Quote: Amore technical explanation is that valid React node is not the same thing as what is returned by React.createElement. Regardless of what a component ends up rendering, React.createElement always returns an object, which is the JSX.Element interface, but React.ReactNode is the set of all possible return values of a component.

- JSX.Element -> Return value of React.createElement
- React.ReactNode -> Return value of a component

More discussion: Where ReactNode does not overlap with JSX.Element

## Types or Interfaces?

You can use either Types or INterfaces to type Props and State, so naturally the question arises - which do you use?

## TL;DR

Use Interface until You Need Type

## More Advice

Here's a helpful rule of thumb:

- always use interface for public API's definition when authoring a library or 3rd party ambient type definitions, as this allows a consumer to extend them via declaration merging if some definitions are missing.

- consider using type for your React Component Props and State, for consistency and because it is more constrained.

You can read more about the reasoning behind this rule of thumb in interface vs Type alias in TypeScript 2.7.

The TypeScript Handbook now also includes guidance on Differences Between Type Aliases and Interfaces.

> Note: At scale, there are performance reasons to prefer interfaces (see official Microsoft notes on this) but take this with a grain of salt

Types are useful for union types (e.g. type MyType = TypeA | TypeB) whereas Interfaces are better for declaring dictionary shapes and then implementing or extending them.

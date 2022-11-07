# Jest and React Testing Library

Jest and React Testing Library are frequently used together for Unit testing. There are three ways you can start using Jest within your Next.js application:

1. Using one of our quickstart examples
2. With the Next.js Rust compiler
3. With Babel

The following sections will go through how you can set up Jest with Jest and React Testing Library:

Setting up Jest (with the Runst Compiler)

## Quickstart

You can use create-next-app with the with-jest example to quickly get started with Jest and React Testing Library:

```
npx create-next-app@latest --example with-jest with-jest-app
```

...

## Creating your tests:

### Add a test script to package.json

Add the Jest executable in watch mode to the package.json scripts:

```json
"scripts": {
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "test": "jest --watch"
    }
}
```

jest --watch will re-run tests when a file is changed. For more Jest CLI options, please refer to the Jest Docs.

### Create your first tests

Your project is now ready to run tests. Follow Jest's convention by adding tests to the __tests__ folder in your project7s root directory.

For example, we can add a test to check if the <Home /> component successfully renders a heading:

```js
// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /welcome to next\.js!/i,
        })
    })

    expect(heading).toBeInTheDocument()
})
```

Optionally, add a snapshot test to keep track of any unexpected changes to your <Home /> component:

```js
// __tests__/snapshot.js

import { render } from '@testing-library/react'
import Home from '../pages/index'

it('renders homepage unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
})
```

> Note; Test files should not be included inside the pages directory because any files inside the pages directory are considered routes.

Run `nom run test` to run your test suite. After your tests pass or fail, you will notice a list of interactive Jest commands that will be helpful as you add more tests.

For further reading, you may find these resources helpful:

- Jest Docs
- React Testing Library Docs
- Testing Playground - use good testing practice to match elements.


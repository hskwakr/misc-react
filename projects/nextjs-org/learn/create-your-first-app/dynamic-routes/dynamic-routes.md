# Dynamic Routes

## Page Path Depends on External Data

In the previous lesson, we covered the case where the page content depends on external data. We used getStaticProps to fetch required data to render the index page.

In this lesson, we'll talk about the case where each page path depends on external data. Next.js allows you to statically generate pages with paths that depend on external data. This enables dynamic URLs in Next.js.

### Page Path Depends on External Data

You can pre-render pages with paths that depend on external data.

## How to Statically Generate Pages with Dynamic Routes

In our case, we want to create dynamic routes for blog posts:

- We want each post to have the path /posts/<id>, where <id> is the name of the markdown firle under the top-level posts directory.

Since we have ssg-ssr.md and pre-rendering.md, we'd like the paths to be /posts/ssg-ssr and /posts/pre-rendering.

## Overview of the Steps

We can do this by taking the following steps. You don't have to make these changes yet -- we'll do it all on the next page.

First, we'll create a page called [id].js under pages/posts. Pages that begin with [ and end with ] are dynamic routes in Next.js.

In pages/posts/[id.js], we'll write code that will render a post page -- just like other pages we've created.

Now, here's what's new: We'll export an async function called getStaticPaths from this page. In this function, we need to return a list of possible values for id.

Finally, we need to implement getStaticProps again - this time, to fetch necessary data for the blog post with a given id. getStaticProps is given params, which contains id (because the file name is [id].js).

### How to Statically Generate Pages with Dynamic Routes

If you want to statically generate a page at a path called /posts/<id> where <id> can be dynamic, then...

Create a page at /pages/posts/[id].js

The page file must contain:

1. A React component o render this page
2. getsTaticPaths which returns an array of possible values for id
3. getStaticProps which fetches necessary data for the post with id

## Dynamic Routes Details

Here is some essential information you should know about dynamic routes.

## Fetch External API or Query Database

Like getAStaticProps, getStaticPaths can fetch data from any data source. In our example, getAllPostIds (which is used by getStaticPaths) may fetch from an external API endpoint:

## Development vs. Production

- In development (npm run dev or yarn dev), getStaticPaths runs on every reuest.
- In production, getStaticPaths runs at build time.

## Fallback

Recall that we returned fallback: false from getStaticPaths.What does this mean?

If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.

If fallback is true, then the behavior of getStaticProps changes:

- The paths returned from getStaticPaths will be rendered to HTML at build time.
- The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a "fallback" version of the page on the first request to such a path.
- in the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

If fallback is blocking, then new paths will be server-side rendered with getStaticProps, and cached for future requests so it only happens once per path.

This is beyond the scope of our lessons, but you can learn more about fallback: true and fallback: 'blocking' in the fallback documentation.

## Catch-all Routes

Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackes. For example:

- pages/posts/[...id].js matches /posts/a, but also /posts/a/b, /posts/a/b/c and so on.

If you do this, in getStaticPaths, you must return an array as the value of the id key like so:

And params.id will be an array in getStaticProps:

Take a look at the catch all routes documentation to learn more.

## Router

If you want to access the Next.js router, you can do so by importing the useRouter hook from next/router.

## 404 Pages

To create a custom 404 page, create pages/404.js. This file is statically geenrated at build time.

Take a look at our Error Pages documentation to learn more.

We have created several examples to illustrate getStaticProps and getStaticPaths -- take a look at their source code to learn more:

- Blog Starter using markdown files (Demo)
- WordPress Example (Demo)
- DatoCMS Example (Demo)
- TakeShape Example (Demo)
- Sanity Example (Demo)

## That's it!

In the next lesson, we'll talk about API Routes in Next.js.

# How to Render IPFS Media In a React App

In this guide, we'll show you how to render IPFS files like images, videos, and audio files within a React application by using the `MediaRenderer` UI component available in our React SDK.

Before we get started, below are some helpful resources where you can learn more about the tools we will use in this guide.

- View project source code
- IPFS media Renderer component

Let's get started.

## Create A React Application (Optional)

I am going to use the Next.js Typescript starter template for this guide.

If you are following along with the guide, you can create a project with the template using the thirdweb CLI:

```console
npx thirdweb create --app --next --ts
```

If you already have a Next.js app, you can follow the frontend application setup.

## Rendering Files Stored In IPFS

If you want to render a media asset stored in IPFS, simply import the MediaRenderer component from the `@thirdweb-dev/react` package like this:

```javascript
import { MediaRenderer } from "@thirdweb-dev/react";
```

And use this component simply by passing in the ipfs url as the `src`:

```javascript
<MediaRenderer
  src="ipfs://QmeMHMZVXQCWTjiMmQeQ3g1cQ5FHz5Yypf9wsBW8anR1RR/0.png"
  alt="A Blue Circle"
/>
```

In this example, our IPFS URL points to an image of a blue circle, which is rendered on the UI:

Depending on what asset your URL points to, the relevant HTML element is rendered on the UI.

FOr example, if your URL points to a video stored in IPFS, that works too without any changes:

## Rendering Multiple IPFS Files

If you want to render multiple IPFS files at once, such as render all the NFTs of an NFT collection, you can do that too!

First, connect to your smart contract like this:

```javascript
const { contract } = useContract(
    "0x05B8aab3fd77580C29c6510d8C54D9E6be4262d2"
);

const { data: nfts } = useNFTs(contract, {
    start: 0,
    count: 10,
});
```

Then, map through the nfts and render them like this:

```javascript
{nfts?.map((nft) => (
    <MediaRenderer
        key={nft.metadata.id}
        src={nft.metadata.image}
        alt={String(nft.metadata.name)}
        style={{
        maxWidth: "200px",
        }}
    />
))}
```

We can render all the NFT images which are stored on IPFS very easily with the MediaRender component! We can also customize it with the style property as I have done here.

## Conclusion

In this guide, we learned how to render IPFS files easily in a react app.

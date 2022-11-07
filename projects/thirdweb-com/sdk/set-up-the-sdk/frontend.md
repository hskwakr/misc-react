# Building Frontend Applications

You can build front-end applications by using our React and TypeScript SDKs!

Front-end applications are best-suited when you want users to connect their wallets to your web application and interact with your contracts using their wallet; such as an NFT Minting Website.

## Automatic Set Up

The easiest way to get started is by using the thirdweb CLI.

This interactive tool creates a new project with thirdweb pre-configured with a framework and language of your choice.

```console
npx thirdweb create
```

That's it! You're project is ready to start interacting with your contract!

> **STARTER KITS & TEMPLATES**
> You can startwith one of our template projects by passing the --template flag and the name of the example repo.

## Manual Installation

If you have an existing project you want to integrate thirdweb into, install the thirdweb SDKs:

```console
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

Then wrap your application in the ThirdWebProvider to get started!

```javascript
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

// the chainId our app wants to be running on
// for our example the Polygon Mumbai Testnet
const desiredChainId = ChainId.Mumbai;

export const MyApp = () => {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      {/* Your App Goes Here */}
    </ThirdwebProvider>
  );
};
```

# Backend & Scripting Applications

Back-end applications are suitable for when you need to perform actions from your wallet or simply need to read data, rather than connecting to your user's wallets.

You can build back-end applications or scripts by using any of our SDKs:

- TypeScript
- Python
- Go

```console
npm install @thirdweb-dev/sdk ethers
```

THere are multiple different ways you can instantiate the SDK and use it, that vary denpending on what you need to do.

## From a Private key

This instantiates the SDK with write-permissions directly from a wallet's private key.

If you expose your private key, anyone can access your wallet's funds. Please proceed carefully.

> **DANGER**
> Ensure you store and access your private key securely.
>
> - Check if you need to use a private key for your application.
> - Never directly expose your private key in your source code.
> - Never commit any file that may contain your private key to your source control.
> - Never use a private key for a frontend (website/dapp) application.
>
> If you are unsure how to securely store and access your private key, please do not proceed.

```javascript
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = ThirdwebSDK.fromPrivateKey(
  // Learn more about securely accessing your private key: https://portal.thirdweb.com/sdk/set-up-the-sdk/securing-your-private-key
  "<your-private-key-here>",
  "mumbai", // configure this to your network
);
```

## From a Signer / Provider

You can use a signer such as one from an Ethers Web3Provider to instantiate the SDK.

```javascript
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// Instantiate the ThirdwebSDK using the signer
// the signer variable comes from a signer you have previously created,
// or from our React SDK's useSigner hook.
const sdk = ThirdwebSDK.fromSigner(signer, "mumbai");
```

## Read-only Connection

```javascript
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// Create a READ-ONLY instance of the ThirdwebSDK on the Mumbai network
const sdk = new ThirdwebSDK("mumbai"); // configure this to your network
```

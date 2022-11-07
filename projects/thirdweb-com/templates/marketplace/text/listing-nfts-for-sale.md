# Using the Example Repo

It's important to note that there are two kinds of listings on the Marketplace:

1. Direct listings
2. Auction listings

> **INFO**
> You can learn more about the difference on the Creating Listings section on the Marketplace contract documation.

## Cloning the Marketplace Example Repository

We've created an example repository where you can create, wiew, bid on, and buy listings.

You can create your copy of this template repository by using the thirdweb CLI or downloading the repository as a `.zip` file and unzipping it from the GitHub URL.

```console
npx thirdweb create --template marketplace-next-ts
```

Once you have the code on your computer, you'll need to install the dependencies:

```console
npm install
```

To start running the code locally, run the command below.

```console
npm run dev
```

## Configure your Marketplace Contract Address

Peplace the value of the contract address inside all of the `useMarketplace` hooks with your Marketplace contract address; you can find this address in the dashboard.

## Configure the Network

In our example repository, we enforce users to be on the `Mumbai` test network.

If you are on a different network, you'll need to configure this value inside the `_app.tsx` file.

```javascript
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;
```

## Configure the Styles

You can configure any of the styles inside the `/styles` directory to change the look and feel of the application to match your brand.

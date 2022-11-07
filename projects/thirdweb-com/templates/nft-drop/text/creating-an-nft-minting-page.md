# Creating an NFT Minting Page

We have created a template for you to plug in your NFT Drop contract address and have your NFT minting page created for you!

THe information such as image, name, description, and supply is automatically loaded from your NFT Drop contract.

> **INFO**
> In this section, we assume you have Node.JS installed on your machine and know how to run commands in the terminal.

## 1. Clone the NFT Minting Page Template

You can create a copy of this template repository by using our CLI or downloading the repository as a `.zip` file and unzipping it from the GitHub URL.

```console
npx thirdweb create --template nft-drop
```

## 2. Configure the NFT Drop Contact Address

Replace the value of the `myNftDropContractAddress` inside the `index.tsx` file. You can find the contract address of your NFT Drop in the dashboard.

## 3. Configure the Network your NFT Drop Contract is deployed on

In our example repository, we enforce users to be on the `Matic Mumbai` test network.

If you are on a different network, you'll need to configure this value in two places.

1. Inside the `_app.tsx` page, replace the value of `activeChainId` with the chain ID of your network.

    ```javascript
    // This is the chainId your dApp will work on.
    const activeChainId = ChainId.Mumbai; // This is the chainId your dApp will work on.
    ```

2. Inside the `index.tsx` page, inside teh `mint` function, replace the value inside the `switchNetwork` function to match the chain ID of your network.

    ```javascript
    // Function to mint/claim an NFT
    async function mint() {
        // ...

        if (isOnWrongNetwork) {
            // Change this value (ChainId.Mumbai) to match your chain.
            switchNetwork && switchNetwork(ChainId.Mumbai);
            return;
        }
    ```

## 4. Configure the Styles to Match Your brand

You can fully customize the colors and style of template by editing the `.css` files inside the `/styles` directory.

That's it! You're ready to ship your NFT minting page to your community.

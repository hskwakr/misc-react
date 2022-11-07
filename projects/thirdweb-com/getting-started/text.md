# Get Started

In this getting started guide, we'll show you how to build and deploy a full web3 application!

By the end, you'll have a finished project that allows you to mint NFTs into an ERC721A smart contract that you created and deployed on the Ethrreum test network!

Let's get started by building a contract!

## What You'll Learn

We'll walk you throught the thirdweb workflow for building web3 apps looks like:

- Building your smart contracts with ContractKit or quickly deployeing a prebuilt contract.

- Deploying contracts using the CLI.

- Building an application using our SDK and UI Components.

- Releasing versions of your contract for others to use.

## Prerequisites

We recommend you have the following tools installed before you begin:

- Node.js and npm
- Yarn
- Git

# Build A Contract

Smart contracts are the foundational layer of any web3 application; they store the state and logic of your project on the blockchain. We provide a variety of ways for you to build and ship contracts, ranging from audited and gas-optimized prebuilt solutions, to a Solidity SDK that provides the building blocks to create your own.

In this section, we're goinng to show you how to build a contract from scratch using Solidity. If you want to explore the prebuild contracts we have available, check out the prebuilt contracts section and join us back here when you're ready to build your application!

## Createiing A Project

First, we can use the CLI to create a new projet with a smart contract inside, and ContractKit installed for us.

```console
npx thirdweb create --contract
```

Let's name our project `contracts` and select `Hardhat` as our framework.

Next, select the ERC721 Base contract as our starting point, which gives us an implementation of the ERC721A NFT standard that we can modify and extend.

Open up the project in your text editor - let's see what's inside.

## Exploring the project

Inside the `contracts` folder, you'll find a `contract.sol` file; this is our smart contract written in Solidity.

If we take a look at the code, you can see that our contract is inheriting the functionality of the ERC721Base, by:

1. Importing the contract.
2. Inheriting the contract, by declaring that our contract is `ERC721Base`.
3. Implementing any required methods such as the `constructor`.

This pattern lets us incorporate functionality from other contracts inside of ours, modify it, and add our own custom logic on top. For example, our contract currently implements all of the logic inside the ERC721Base.sol contract.

## Adding Functionality

Base contracts work out of the box without any additional code required, but you might want to add additional functionality. Let's see how we can both override and extend the base contract.

### Adding A Feature

Features are a great way to add individual pieces of functionality to your contract, such as Permissions.

You can follow the same pattern as we did with the base contract:

1. Import it

```solidity
import "@thirdweb-dev/contracts/extension/PermissionsEnumerable.sol";
```

2. Inherit it

```solidity
contract Contract is ERC721Base, PermissionsEnumerable {
    // ...
}
```

3. Implement it

```solidity
contract Contract is ERC721Base, PermissionsEnumerable {
      constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps
    )
        ERC721Base(
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps
        )
    {
        // Give the contract deployer the "admin" role when the contract is deployed.
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
}
```

That's it! We can now restrict who can call certain functions on our contract.

### Adding Custom Logic

Let's combine our new feature with some custom logic to create a new function that only the `admin` role can call.

Adove the constructor, let's add a `powerLevel` mapping that stores a power level for each NFT.

```solidity
// A mapping is a key-value store that lets us keep data in our contract.
// Here, the key is the token ID, and the value is the power level for that NFT.
mapping(uint256 => uint256) public powerLevel;
```

Great! Now the admin wallet (the contract deployer) can set the power level for any NFT.

#### Override An Inherited Method

Finally, let's see how we can override a method in the base contract.

Let's say we want to add a power level to the NFT when it's minted.

We can override the `minTo` method from the base contract, and add our custom logic inside.

```solidity
function mintTo(address _to, string memory _tokenURI) public virtual override {
    // Grab the next token ID being minted using an inherited view.
    uint256 tokenId = nextTokenIdToMint();

    // Here, "super" refers to the base contract.
    // We are saying "run the mintTo method from the base contract".
    super.mintTo(_to, _tokenURI);

    // *then* we can add our custom logic on top:
    powerLevel[tokenId] = tokenId;
}
```

## Deploying

We're ready for liftoff! Let's deploy our contract to the blockchain, by running:

```console
npx thirdweb deploy
```

That's it! This command does the following:

- Compiles your contract.
- Uploads your contract source code (ABI) to IPFS.
- Opens the dashboard for you to select one of our supported networks to deploy to.

From the dashboard, we can see all of the ContractKit that our cantract implements.

For each extension, we unlock capabilities in the dashboard and the SDK. We'll learn more about that in the next section.

First, we need to enter the parameters for our contract:

- `_name`: The name of our contract

- `_symbol`: The symbol or "tricker" given to our contracts tokens

- `_royaltyRecipient`: The wallet address that will receive the royalties from secondary sales

- `_royaltyBps`: The basis points (bps) that will be given to the royalty recipient for each secondary sale, e.g. 500 = 5%

Finally, select the network you want to deploy to (we recommend the Goerli test network), and click "Deploy Now".

### Your Contract Dashboard

Welcome to your very own contract dashboard!

Here, you'll find all of the information you need to interact with and manage your contract, including:

- `Explorer`: call any function on your contract, and view the results.

- `Events`: a live-updating feed of all events emitted by your contract.

As well as tabs for each extension that your contract implemnents:

- `NFTs`: since you implemented the ERC721 Standard.

- `Permissions`: since you implemented the Permissions feature.

- `Settings`: since you implemented the Contract Metadata and Royalty features.

You just built and deployed your own NFT smart contract!

That's a huge accomplishment, and we're so proud of you!

# Create An Application

You just built and deployed a smart contract to the block chain. Congratulations!

Now, let's see how we can build an application that interacts with it.

## Creating A Project

Run the following command to create a web application with the React and JavaScript SDKs installed for us.

```console
npx thirdweb create --app
```

Select `Next.js` as the framework and `JavaScript` as the language.

Open up the project in your text editor - let's see what we're working with!

### Exploring the project

Inside the `_app.jsx` file, you'll find the `ThirdWebProvider` wrapping the entire application.

This allows us to use all of the React SDK hooks and components in our application, and configure a `desiredChainId`; which declares which blockchain & network our smart contracts live on.

Since we deployed our smart contract to the `Goerli` network, we'll set the `desiredChainId` to `ChainId.Goerli`.

pages/_app.jsx

```javascript
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

// Here we can specify the chainId our app should run on
// In this example, we'll use the Ethereum Goerli Testnet
const desiredChainId = ChainId.Goerli;

export const MyApp = () => {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
};
```

On the `index.jsx` page, you'll find a Connect Wallet button that allows users to connect their wallet to our application.

pages/index.jsx

```javascript
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return <ConnectWallet accentColor="#f213a4" colorMode="light" />;
}
```

## Building the App

Now that we have a project set up, let's start interacting with our smart contract.

### Connecting to the Contract

To dp that, we'll need our contract address; which you can get from the dashboard:

Then, pass that value into the `useContract` hook like so:

pages/index.jsx

```javascript
import { useContract } from "@thirdweb-dev/react";

export default function Home() {
  const { contract } = useContract("<CONTRACT_ADDRESS>");

  // Now you can use the contract in the rest of the component!
}
```

### Reading Data

The `useContractRead` hook lets you read any data from your smart contract using the `contract` as the first parameter, and the name of the function/view/mapping. etc. as the second parameter.

For example, we can read the `name` value stored in our contract like so:

pages/index.jsx

```javascript
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function Home() {
  const { contract } = useContract("<CONTRACT_ADDRESS>");
  const { data: name, isLoading } = useContractRead(contract, "name");
}
```

> ### UNDERSTANDING THE SYNTAX
> Learn more about these ES6 JavaScript features used above - destructring and renaming.

Sometimes, using `useContractRead` doesn't give you all the information you need.

For example, to view all of the NFTs in our contract using this method, we'd need to:

- Read the total number of tokens in the contract

- Loop through each token ID and read the URI for each one

- Fetch each NFT's metadata from IPFS using a gateway

- Query each NFT for its current owner

That's a lot of work. Now's a good time to introduce our specialized functions!

### Solidity Extention -> JavaScript Function

For each of the extensions you implemented in your smart contract, you unlock a way to use that in your application.

Let's look at an example. The contract we built implements the ERC721 and ERC721Supply extensions.

By doing so, we can use the View All functionality in our application! In React, that is the `useNFTs` hook:

pages/index.jsx

```javascript
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Home() {
  const { contract } = useContract("<CONTRACT_ADDRESS>");
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
}
```

Underthe hood, this does all of the heavy lifting we mentioned above, and more!

By using the `useNFTs` hook, here's what we get:

- All of the NFTs in our contract with their metadata and current owner

- An `isLoading` state you can use to show a loading indicator

- Cached results - so you don't have to worry about re-fetching the same data again

- Real-time updates - so you can see the latest data as it changes (if you use `Web3Button` or our write-hooks)

- An `isError` flag, pagination options, automatic retries, and more!

> ### REACT QUERY
> Our react SDK uses a library called React Query to power these features.

Now that we have a query to get all of our NFTs, let's mint one and display them in our app!

### Writing Transactions

You can call any function on your smart contract with the `useContractWrite` hook, but for most use cases, you'll want to use the `Web3Button` component to write transactions; which ensures the user has their wallet connected and is on the right network before calling teh function.

As we described above, you also gain access to a specialized function for each extension you implent in Solidity, such as the Mint feature enabled by implementing ERC721Mintable in our smart contract.

now we know how to read and write to our smart contract, let's build the UI for our app!

### UI Components

Let's render each of the NFTs using the `NFT Media Renderer` component, making use of the loading state from `useNFTs`:

pages/index.jsx

```javascript
import {
  useContract,
  useNFTs,
  useMintNFT,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";

export default function Home() {
  const { contract } = useContract("<CONTRACT_ADDRESS>");
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
  const { mutate: mintNFT, isLoading: isMintingNFT } = useMintNFT(contract);

  return (
    <div>
      <h2>My NFTs</h2>
      {isReadingNfts ? (
        <p>Loading...</p>
      ) : (
        <div>
          {nfts.map((nft) => (
            <ThirdwebNftMedia
              key={nft.tokenId}
              metadata={nft.metadata}
              height={200}
            />
          ))}
        </div>
      )}
    </div>
  );
}
```

Next, let's add a button to mint an NFT, using the `Web3Button` component:

pages/index.jsx

```javascript
import {
  useContract,
  useNFTs,
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";

const contractAddress = "<CONTRACT_ADDRESS>";
export default function Home() {
  const { contract } = useContract(contractAddress);
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);

  return (
    <div>
      {/* ... Existing Display Logic here ... */}

      <Web3Button
        contractAddress={contractAddress}
        action={(contract) =>
          contract.erc721.mint({
            name: "Hello world!",
            image:
              // You can use a file or URL here!
              "ipfs://QmZbovNXznTHpYn2oqgCFQYP4ZCpKDquenv5rFCX8irseo/0.png",
          })
        }
      >
        Mint NFT
      </Web3Button>
    </div>
  );
}
```

That's it! You've built a full web3 app! With only a few lines of code, your app can:

- View all of the NFTs in your contract with live updates

- Mint new NFTs using your wallet

> ### DEPLOYING YOUR APP
> Deploy your app to Netflify or Vercel for free to shere it with the world!

We're so excited to see what you build. Let us know what you've shipped so far:

# Release A Contract

In a traditional software development workflow, you improve your code overtime, and release incrementad versions of your that other people can use; typically through a registry such as npm.

Release brings this workflow to your smart contracts, allowing you to release iterations of your contract to the world and have and have other users deploy them, view the source code, and more.

Let's see how we can release the contract we wrote in the previous section!

From within the contracts folder, run the following command using the CLI:

```console
npx thirdweb release
```

This command, similar to `deploy`, does the following:

- Compiles your contract.

- Uploads your contract source code (ABI) to IPFS.

- Opens the dashboard for you to release your contract onto the registry.

From the dashboard, you can enter information about your smart contract, as well as release notes for this version.

Click Create Release and accept the gasless transaction from your wallet to release your contract.

# Your Contract Landing Page

After you release your contract, you'll have a landing page for it on the thirdweb website.

From this page, anybody can view all of the information about your contract, including:

- The contract's name, description, and version.

- The source code and all of the functions available in the contract.

- Release data, license, and any extensions you implemented.

- Any release notes you added.

Most importantly, anybody can now deploy this contract in one click, by clicking Deploy Now from this page!

# Your Profile Page

You wallet address is tied to your on-chain profile, and each release you make is associated with your address.

Other users can view your profile to see all of the to see all of the contracts you've released, as well as any other information you've added; such as your name, profile picture, and social media links.

If you have an ENS Domain set up in your wallet, it is automatically detected and set as your profile's URL; giving you an easy way to verify your identity and prove ownership of your contracts.

Congratulations! Your contract is ready for the world to use.

Let us know what  you release by taggin us on Twitter:

# What's Next?

Amazing work completing the getting started guide.

If you're looking for fun project ideas to take your skills to the next level, check out our templates:

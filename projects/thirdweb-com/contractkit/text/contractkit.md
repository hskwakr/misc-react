# ContractKit

Build smart contracts with Solidity and unlock the features of the dashboard and SDK, with:

- Base Contracts that can build upon, such as ERC721Base.

- Extension contracts that you can plug-in to unlock specific functionality, such as Permission Controls and Royalty Fees.

- Interfaces that you can implement, and use to interact with other contracts that use Contract Kit.

> SOLANA PROGRAMS
> ContractKit is coming to Solana soon!
>
> In the meantime, you can use the programs we have available.

To get started, run the command below to create aq new project with your preferences set up:

```console
npx thirdweb create --contract
```

Or install the contracts package into your existing Solidity project:

```console
npm install @thirdweb-dev/contracts
```

## Why Use ContractKit

Each feature you implement in your smart contracts unlocks functionality in both the dashboard and SDK to help you build applications on top of them.

For example, if you implement the ERC721Base contract, you'll unlock the mint button in the dashboard and can use the mint function in the SDK; which automatically uploads and pins your metadata to IPFS!

## How To Use ContractKit

You can use ContractKit to build out your smart contract project end-to-end, or to simply add features to your own, exisiting smart contract.

### Using Base Contracts

ContractKit gives you base contracts that you can use as the foundation of your smart contract.

1. To start, import and inferit the base contract that is right for your project. You can find the list of all available base contracts here.

    ```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    import "@thirdweb-dev/contracts/base/ERC721Base.sol";

    // Error: Contract "MyNFT" should be marked as abstract.
    contract MyNFT is ERC721Base {}
    ```

2. Base contracts expect certain constructor arguments to function as intended. Implement a constructor for your smart contract and pass the appropriate values to the constructor of your base contract.

    ```solidaty
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    import "@thirdweb-dev/contracts/base/ERC721Base.sol";

    contract MyNFT is ERC721Base {
        constructor(
            string memory _name,
            string memory _symbol,
            address _royaltyRecipient,
            uint128 _royaltyBps
        ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}
    }
    ```

3. now you're all set up! Your smart contract now has all the functionality provided by the base contract it inherits and is ready to be deployed to any EVN blockchain of your choice.

### Using Extension Contracts

With the foundation for your smart contract ready, you can now plug-in additional features to your smart contract using extension contracts.

1. To start, import and inherit the extension contract that is right for your project. You can find the list of all available extensions here.

    ```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    import "@thirdweb-dev/contracts/base/ERC721Base.sol";
    import "@thirdweb-dev/contracts/extension/Permissions.sol";

    contract MyNFT is ERC721Base, Permissions {
        constructor(
            string memory _name,
            string memory _symbol,
            address _royaltyRecipient,
            uint128 _royaltyBps
        ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}
    }
    ```

    Note: for some extension contracts (e.g. LazyMint) you may see the following error at this step: `Contract "MyNFT" should be marked as abstract.` No problem! To resolve this error, look at the usage guide for the particular extension contract you're using.

2. Use the functions provided by the extension contract to change the befaviour of your smart contract.

    ```solidity
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;

    import "@thirdweb-dev/contracts/base/ERC721Base.sol";
    import "@thirdweb-dev/contracts/extension/Permissions.sol";

    contract MyNFT is ERC721Base, Permissions {
        bytes32 private constant MINTER_ROLE = keccak256("MINTER_ROLE");

        constructor(
            string memory _name,
            string memory _symbol,
            address _royaltyRecipient,
            uint128 _royaltyBps
        ) ERC721Base(_name, _symbol, _royaltyRecipient, _royaltyBps) {}

        /**
        *  `_canMint` is a function available in `ERC721Base`.
        *
        *  It is called every time a wallet tries to mint NFTs on this
        *  contract, and lets you define the condition in which an
        *  attempt to mint NFTs should be permitted, or rejected.
        *
        *  By default, `ERC721Base` only lets the contract's owner mint
        *  NFTs. Here, we override that functionality.
        *
        *  We use the `Permissions` extension to specify that anyone holding
        *  "MINTER_ROLE" should be able to mint NFTs.
        */
        function _canMint() internal view override returns (bool) {
            return hasRole(MINTER_ROLE, msg.sender);
        }
    }
    ```

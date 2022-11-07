# Base Contracts

Each base smart contract packages together a unique set of smart contract features so that you can focus on adding your custom logic on top, instead of starting from scratch.

Rather than implementing EIP standards manually, base contracts provide a logical foundation for you to extend and customize to your needs.

Weprovide several base contracts for ERC721, ERC1155, ERC20; each with different levels of functionality depending on your use case.

You can override and add additional functionality to the base logic, and include extensions to supplement the base functionality.

## List of Base Contracts

Below is a list of all the base contracts available.

ERC721

- ERC721Base
    Implementation of the ERC721A standard with the capability to mint NFTs.

- ERC721SignatureMint
    Adds signature-based minting capability to the ERC721Base contract.

- ERC721LazyMint
    Adds lazy minting capability to the ERC721Base. Batch lazy-mint NFT metadata and have other wallets claim them under conditions you define in a `varifyClaim` function.

- ERC721DelayedReveal
    Adds delayed reveal to the ERC721LazyMint contract.

- ERC721Drop
    Adds delayed reveal and claim conditions to the ERC721LazyMint contract. Batch lazy-mint NFTs, and set up claim conditions to define how your NFTs can be claimed.

ERC1155

- ERC1155Base
    Implementation of the ERC1155 standard with the capability to mint and burn NFTs.

- ERC1155SignatureMint
    Adds signature-based minting capability to the ERC1155Base contract.

- ERC1155LazyMint
    Adds lazy minting capability to the ERC1155Base contract. Batch lazy-mint NFT metadata and have other wallets claim them under conditions you define in a `verifyClaim` function.

- ERC1155DelayedReveal
    Adds delayed reveal to the ERC1155Base contract.

- ERC1155Drop
    Adds delayed reveal and claim conditions to the ERC1155Base contract. Batch lazy-mint NFTs, and set up claim conditions to define how your NFTs can be claimed.

ERC20

- ERC20Base
    Implementation of the ERC20 standard with support for the EIP-2612 standard.

- ERC20Vote
    Add vote capability to the ERC20Base contract.

- ERC20SignatureMint
    ADd signature-based minting capability to the ERC20Base contract.

- ERC20SignatureMintVote
    Adds vote capability to the ERC20SignatureMint contract.

- ERC20Drop
    Adds claim conditions capability to the ERC20Base contract. Distribute your token for a price under the criteria set up in claim conditions.

- ERC20DropVote
    Adds vote capability to the ERC20Drop contract.

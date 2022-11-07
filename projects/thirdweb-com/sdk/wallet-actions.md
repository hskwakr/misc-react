# Wallet Actions

Perform basic web3 actions using the currently connected wallet address, or the wallet you initialized the SDK with.

## Get Native Token Balance

Get the balance of the currently connected wallet address in the native token.

The "native" token refers to the token that is used to pay gas fees for the current chain.

For example, if you are on the Ethereum Mainne, the native token is Ether.

```javascript
const sdk = useSDK();

// native currency balance
const balance = await sdk.wallet.balance();
// ERC20 token balance
const erc20balance = await sdk.wallet.balance(tokenContractAddress);
```

## Get Connected Wallet Address

Get the currently connected wallet's public address, if there is one.

```javascript
import { useAddress } from "@thirdweb-dev/react"

const App = () => {
  const address = useAddress()

  return <div>{address}</div>
}
```

## Transfer Tokens

Transfer a specified quantity of either the native token or a specified ERC20 token to another wallet address.

```javascript
const sdk = useSDK();

 // transfer 0.8 ETH
await sdk.wallet.transfer("0x...", 0.8);
 // transfer 0.8 tokens of `tokenContractAddress`
await sdk.wallet.transfer("0x...", 0.8, tokenContractAddress);
```

## Sign A Message

Sign a message you specify with the currently connected wallet.

Message signing can be utilized to prove that a user owns a wallet address.

After a user has signed the message, you can then verify which wallet address signed the message by using the `recoverAddress` method.

> **AUTH**
> For verifying wallet ownership on the server-side, view our Auth Documentaion.

```javascript
const sdk = useSDK();

// This is the message to be signed
const message = "Sign this message...";

// Now we can sign the message with the connected wallet
const signature = await sdk.wallet.sign(message);
```

## Recover Signing Address

View the wallet address that signed a message you specify.

```javascript
const sdk = useSDK();

const message = "Sign this message...";
const signature = await sdk.wallet.sign(message);

// Now we can recover the signing address
const address = sdk.wallet.recoverAddress(message, signature);
```

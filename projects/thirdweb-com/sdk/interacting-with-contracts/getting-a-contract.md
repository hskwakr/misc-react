# Getting a Contract

Connect to your smart contract using its contract address.

## Connect to a contract

```javascript
const { contract, isLoading, error } = useContract("{{contract_address}}");
```

## Get Contract From ABI

If you have compiled your Solidity code into an ABI, you can use it to connect to your contract.

This is useful if you want to interact with a contract that was not deployed using thirdweb.

```javascript
const sdk = useSDK();

// Import your ABI from a JSON file
import myABI from "./path/to/myABI.json";

const contract = sdk.getContractFromAbi(
  "{{contract_address}}",
  // Pass in the "abi" field from the JSON file
  myABI.abi
);
```

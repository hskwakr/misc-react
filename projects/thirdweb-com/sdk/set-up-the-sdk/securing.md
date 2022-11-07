# Securely Storing Your Private Key

If you need to perform actions directly from your wallet in a server-side or scripting environment, instantiate the SDK using your wallet's private key.

Your wallet's private key grants full control of your wallet, for this reason, having your private key written in plain text or environment variables is a security risk; we recommend using a secret management service to store it securely.

There are many services available to store secret values:

- Google Cloud Secret Manager
- AWS Secrets Manager
- Doppler
- HashiCorp Vault

## Using Google Cloud Secret Manager

This section shows you how to use Google Cloud Secret Manager, as an example.

From the Google Cloud Console, enable the Secret Manager API in your project, and create a new secret containing your wallet's private key as the value. Follow this guide to create a service account with the Secret Manager Secret Accessor role and export the key as a JSON file.

> **DANGER**
> Ensure you secure the values in the .json fie securely; such as using enviroment variables.

Create and retrieve your private key from a secret value by following this guide.

Use the accessSecretVErsion function from the guide to instantiate the SDK with your private key on the server-side.

```javascript
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = ThirdwebSDK.fromPrivateKey(
  accessSecretVersion(), // Your wallet private key
  "goerli", // configure this to your network
);
```

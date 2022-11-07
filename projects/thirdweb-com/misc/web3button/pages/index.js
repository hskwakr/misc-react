import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

// Put Your NFT Drop Contract address from the dashboard here
const myNftDropContractAddress = "0xcad84C844F1d447c2444863f235B1950d6667CdC";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Web3Button
          contractAddress={myNftDropContractAddress}
          action={(contract) => console.log(contract)}
          colorMode="dark"
          accentColor="#ff0000"
        >
          Print Contract from ABI
        </Web3Button>
      </main>
    </div>
  );
}

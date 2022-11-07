import { MediaRenderer, useContract, useNFTs } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

// Put Your NFT Drop Contract address from the dashboard here
const myNftDropContractAddress = "0xcad84C844F1d447c2444863f235B1950d6667CdC";

const Home: NextPage = () => {
  const { contract } = useContract(myNftDropContractAddress);
  const { data: nfts } = useNFTs(contract, {
    start: 0,
    count: 10,
  });

  return (
    <div>
      {nfts ? (
        <div>
          {nfts?.map((nft) => (
            <MediaRenderer
              key={nft.metadata.id}
              src={nft.metadata.image}
              alt={String(nft.metadata.name)}
              style={{
                maxWidth: "200px",
              }}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;

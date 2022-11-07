import {
  ThirdwebNftMedia,
  useContract,
  useContractMetadata,
  useNFTs,
} from "@thirdweb-dev/react";
import "./styles/Home.css";

// Put Your NFT Drop Contract address from the dashboard here
const myNftDropContractAddress = "0xcad84C844F1d447c2444863f235B1950d6667CdC";

export default function Home() {
  // Replace this with your smart contract address
  const { contract } = useContract(myNftDropContractAddress);
  const { data: nfts, isLoading } = useNFTs(contract);
  const { data: metadata, isLoading: loadingMetadata } =
    useContractMetadata(contract);

  return (
    <main className="container">
      {!loadingMetadata && (
        <header className="heading">
          <div>
            <img src={metadata?.image} alt="NFT Collection Thumbnail" />
            <h1>{metadata?.name}</h1>
          </div>
        </header>
      )}

      {!isLoading ? (
        <div className="gallery">
          {nfts?.map((e) => (
            <div className="card">
              <ThirdwebNftMedia metadata={e.metadata} />
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </main>
  );
}

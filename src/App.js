import { useState } from "react";
import "./styles.css";
import NounsDescriptorAbi from "./abis/NounsDescriptor.json";
import NounsSeederAbi from "./abis/NounsSeeder.json";
import { Contract } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

export default function App() {
  const [currentSeed, setCurrentSeed] = useState(undefined);
  const [currentImg, setCurrentImg] = useState("");

  const provider = new Web3Provider(window.ethereum);

  const addresses = {
    nounsDescriptor: "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",
    //0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63",
    nounsSeeder: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9"
    //0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515"
  };

  const contracts = {
    nounsDescriptor: new Contract(
      addresses.nounsDescriptor,
      NounsDescriptorAbi,
      provider
    ),
    nounsSeeder: new Contract(addresses.nounsSeeder, NounsSeederAbi, provider)
  };

  const generateNoun = async () => {
    const nounId = Math.floor(Math.random() * 1000);
    const seed = await contracts.nounsSeeder.generateSeed(
      nounId,
      addresses.nounsDescriptor
    );
    setCurrentSeed(seed);
    const svg = await contracts.nounsDescriptor.generateSVGImage(seed);
    setCurrentImg(atob(svg));
  };

  return (
    <div className="App">
      <button onClick={() => generateNoun()}>Generate Noun</button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <div dangerouslySetInnerHTML={{ __html: currentImg }}></div>
        <div>{currentSeed && JSON.stringify(currentSeed)}</div>
      </div>
    </div>
  );
}

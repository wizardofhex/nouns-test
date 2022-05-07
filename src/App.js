import { useState } from "react";
import "./styles.css";
import NounsDescriptorAbi from "./abis/NounsDescriptor.json";
import NounsSeederAbi from "./abis/NounsSeeder.json";
import { ethers, Contract } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import NounsTokenAbi from "./abis/NounsToken.json";
import { sign } from "crypto";

export default function App() {
  const [currentSeed, setCurrentSeed] = useState(undefined);
  const [currentImg, setCurrentImg] = useState("");
  //debugger;

  //const provider = new Web3Provider(window.ethereum);
  const provider2 = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider2.getSigner();
  console.log(signer);
  const accounts = window.ethereum.enable();
  const addresses = {
    nounsDescriptor: "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0",
    //0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63",
    nounsSeeder: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
    //0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515"
    // ERC721: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
    nounsToken: "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9"
  };

  const contracts = {
    nounsDescriptor: new Contract(
      addresses.nounsDescriptor,
      NounsDescriptorAbi,
      provider2
    ),
    nounsSeeder: new Contract(addresses.nounsSeeder, NounsSeederAbi, provider2),
    nounsToken: new Contract(addresses.nounsToken, NounsTokenAbi, signer)
    // ERC721: new Contract(addresses.ERC721, ERC721Abi ,provider)
  };
   const mintabeachbum = async () => {
    const testaddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
    console.log('signer: ', signer);
    console.log(accounts);
    const address1 = accounts.then(result => result.data);
    console.log(address1);
     debugger;

       const setMinterAdd = await contracts.nounsToken.setMinter(testaddress);
       console.log(setMinterAdd);
       const mintme = await(await contracts.nounsToken.mint()).wait();
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
      <button onClick={() => mintabeachbum()}>Mint Beach Bum</button>
    </div>
  );
}

import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INounsAuctionHouse } from "../INounsAuctionHouse";
export declare class INounsAuctionHouse__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): INounsAuctionHouse;
}

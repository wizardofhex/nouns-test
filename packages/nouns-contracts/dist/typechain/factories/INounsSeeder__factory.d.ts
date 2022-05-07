import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INounsSeeder } from "../INounsSeeder";
export declare class INounsSeeder__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): INounsSeeder;
}

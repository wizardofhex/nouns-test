import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INounsToken } from "../INounsToken";
export declare class INounsToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): INounsToken;
}

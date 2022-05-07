import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INounsDescriptor } from "../INounsDescriptor";
export declare class INounsDescriptor__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): INounsDescriptor;
}

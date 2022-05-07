import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INounsDaoExecutor } from "../INounsDaoExecutor";
export declare class INounsDaoExecutor__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): INounsDaoExecutor;
}

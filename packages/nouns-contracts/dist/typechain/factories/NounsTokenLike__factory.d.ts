import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { NounsTokenLike } from "../NounsTokenLike";
export declare class NounsTokenLike__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): NounsTokenLike;
}

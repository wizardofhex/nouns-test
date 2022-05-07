import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoEvents } from "../NounsDaoEvents";
export declare class NounsDaoEvents__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoEvents>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoEvents;
    connect(signer: Signer): NounsDaoEvents__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoEvents;
}

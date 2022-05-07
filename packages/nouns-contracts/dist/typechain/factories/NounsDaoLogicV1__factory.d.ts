import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoLogicV1 } from "../NounsDaoLogicV1";
export declare class NounsDaoLogicV1__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoLogicV1>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoLogicV1;
    connect(signer: Signer): NounsDaoLogicV1__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoLogicV1;
}

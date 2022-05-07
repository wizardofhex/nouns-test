import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoLogicV1Harness } from "../NounsDaoLogicV1Harness";
export declare class NounsDaoLogicV1Harness__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoLogicV1Harness>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoLogicV1Harness;
    connect(signer: Signer): NounsDaoLogicV1Harness__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoLogicV1Harness;
}

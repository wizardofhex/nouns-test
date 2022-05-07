import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoStorageV1 } from "../NounsDaoStorageV1";
export declare class NounsDaoStorageV1__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoStorageV1>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoStorageV1;
    connect(signer: Signer): NounsDaoStorageV1__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoStorageV1;
}

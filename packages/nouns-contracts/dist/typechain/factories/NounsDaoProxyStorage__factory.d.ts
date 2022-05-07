import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoProxyStorage } from "../NounsDaoProxyStorage";
export declare class NounsDaoProxyStorage__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoProxyStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoProxyStorage;
    connect(signer: Signer): NounsDaoProxyStorage__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoProxyStorage;
}

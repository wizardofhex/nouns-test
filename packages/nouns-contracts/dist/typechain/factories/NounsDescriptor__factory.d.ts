import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDescriptor } from "../NounsDescriptor";
export declare class NounsDescriptor__factory extends ContractFactory {
    constructor(linkLibraryAddresses: NounsDescriptorLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: NounsDescriptorLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDescriptor>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDescriptor;
    connect(signer: Signer): NounsDescriptor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDescriptor;
}
export interface NounsDescriptorLibraryAddresses {
    ["__$e1d8844a0810dc0e87a665b1f2b5fa7c69$__"]: string;
}

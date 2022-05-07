import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsSeeder } from "../NounsSeeder";
export declare class NounsSeeder__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsSeeder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsSeeder;
    connect(signer: Signer): NounsSeeder__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsSeeder;
}

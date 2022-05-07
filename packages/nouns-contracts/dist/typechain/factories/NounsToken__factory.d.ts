import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsToken } from "../NounsToken";
export declare class NounsToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_noundersDAO: string, _minter: string, _descriptor: string, _seeder: string, _proxyRegistry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsToken>;
    getDeployTransaction(_noundersDAO: string, _minter: string, _descriptor: string, _seeder: string, _proxyRegistry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsToken;
    connect(signer: Signer): NounsToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsToken;
}

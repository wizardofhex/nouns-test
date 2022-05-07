import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoExecutor } from "../NounsDaoExecutor";
export declare class NounsDaoExecutor__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoExecutor>;
    getDeployTransaction(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoExecutor;
    connect(signer: Signer): NounsDaoExecutor__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoExecutor;
}

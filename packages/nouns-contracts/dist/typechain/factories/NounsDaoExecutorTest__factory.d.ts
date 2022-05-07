import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoExecutorTest } from "../NounsDaoExecutorTest";
export declare class NounsDaoExecutorTest__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoExecutorTest>;
    getDeployTransaction(admin_: string, delay_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoExecutorTest;
    connect(signer: Signer): NounsDaoExecutorTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoExecutorTest;
}

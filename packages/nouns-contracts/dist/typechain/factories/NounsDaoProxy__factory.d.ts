import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoProxy } from "../NounsDaoProxy";
export declare class NounsDaoProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(timelock_: string, nouns_: string, vetoer_: string, admin_: string, implementation_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoProxy>;
    getDeployTransaction(timelock_: string, nouns_: string, vetoer_: string, admin_: string, implementation_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoProxy;
    connect(signer: Signer): NounsDaoProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoProxy;
}

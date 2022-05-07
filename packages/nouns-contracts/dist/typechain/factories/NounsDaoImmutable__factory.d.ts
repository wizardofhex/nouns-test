import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDaoImmutable } from "../NounsDaoImmutable";
export declare class NounsDaoImmutable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(timelock_: string, nouns_: string, admin_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDaoImmutable>;
    getDeployTransaction(timelock_: string, nouns_: string, admin_: string, vetoer_: string, votingPeriod_: BigNumberish, votingDelay_: BigNumberish, proposalThresholdBPS_: BigNumberish, quorumVotesBPS_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDaoImmutable;
    connect(signer: Signer): NounsDaoImmutable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDaoImmutable;
}

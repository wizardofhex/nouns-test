import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsAuctionHouse } from "../NounsAuctionHouse";
export declare class NounsAuctionHouse__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsAuctionHouse>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsAuctionHouse;
    connect(signer: Signer): NounsAuctionHouse__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsAuctionHouse;
}

import { Signer, BytesLike, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsAuctionHouseProxy } from "../NounsAuctionHouseProxy";
export declare class NounsAuctionHouseProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(logic: string, admin: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsAuctionHouseProxy>;
    getDeployTransaction(logic: string, admin: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsAuctionHouseProxy;
    connect(signer: Signer): NounsAuctionHouseProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsAuctionHouseProxy;
}

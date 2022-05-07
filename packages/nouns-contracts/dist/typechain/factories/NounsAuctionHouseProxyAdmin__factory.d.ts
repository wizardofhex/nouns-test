import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsAuctionHouseProxyAdmin } from "../NounsAuctionHouseProxyAdmin";
export declare class NounsAuctionHouseProxyAdmin__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsAuctionHouseProxyAdmin>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsAuctionHouseProxyAdmin;
    connect(signer: Signer): NounsAuctionHouseProxyAdmin__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsAuctionHouseProxyAdmin;
}

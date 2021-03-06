"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaliciousBidder__factory = void 0;
const ethers_1 = require("ethers");
class MaliciousBidder__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MaliciousBidder__factory = MaliciousBidder__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract INounsAuctionHouse",
                name: "auctionHouse",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "bid",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610144806100206000396000f3fe6080604052600436106100225760003560e01c806359d667a51461002e57600080fd5b3661002957fe5b600080fd5b61004161003c3660046100c9565b610043565b005b6040517f659dd2b40000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff83169063659dd2b49034906024016000604051808303818588803b1580156100ac57600080fd5b505af11580156100c0573d6000803e3d6000fd5b50505050505050565b600080604083850312156100dc57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461010057600080fd5b94602093909301359350505056fea26469706673582212208c40900b6a93f2e3127458f6f0e92551abe59099dc0b3d0a6d71ba8cfdedfc5364736f6c63430008060033";

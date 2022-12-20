/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RandomNumberConsumerV2,
  RandomNumberConsumerV2Interface,
} from "../../contracts/RandomNumberConsumerV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "vrfCoordinator",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "ReturnedRandomness",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_randomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_requestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162000b5738038062000b5783398181016040528101906200003891906200015e565b818073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060e0818152505033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508267ffffffffffffffff1660c08167ffffffffffffffff1660c01b815250505050506200025f565b6000815190506200012a8162000211565b92915050565b60008151905062000141816200022b565b92915050565b600081519050620001588162000245565b92915050565b6000806000606084860312156200017a57620001796200020c565b5b60006200018a8682870162000147565b93505060206200019d8682870162000119565b9250506040620001b08682870162000130565b9150509250925092565b6000620001c782620001d8565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600067ffffffffffffffff82169050919050565b600080fd5b6200021c81620001ba565b81146200022857600080fd5b50565b6200023681620001ce565b81146200024257600080fd5b50565b6200025081620001f8565b81146200025c57600080fd5b50565b60805160601c60a05160601c60c05160c01c60e0516108af620002a8600039600061021d0152600061023e015260006101e101526000818160c7015261011b01526108af6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631fe543e314610051578063e0c862891461006d578063e89e106a14610077578063f6eaffc814610095575b600080fd5b61006b600480360381019061006691906104e7565b6100c5565b005b610075610185565b005b61007f6102df565b60405161008c91906106c0565b60405180910390f35b6100af60048036038101906100aa919061048d565b6102e5565b6040516100bc91906106c0565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461017757337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f400000000000000000000000000000000000000000000000000000000815260040161016e929190610622565b60405180910390fd5b6101818282610309565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101df57600080fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635d3b1d307f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006003620186a060026040518663ffffffff1660e01b815260040161028595949392919061066d565b602060405180830381600087803b15801561029f57600080fd5b505af11580156102b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d791906104ba565b600181905550565b60015481565b600081815481106102f557600080fd5b906000526020600020016000915090505481565b806000908051906020019061031f92919061035b565b507fefb16d61046900da527008568620fb9f8420e2f5ed4de3bfbded5035c9362b0e8160405161034f919061064b565b60405180910390a15050565b828054828255906000526020600020908101928215610397579160200282015b8281111561039657825182559160200191906001019061037b565b5b5090506103a491906103a8565b5090565b5b808211156103c15760008160009055506001016103a9565b5090565b60006103d86103d384610700565b6106db565b905080838252602082019050828560208602820111156103fb576103fa610842565b5b60005b8581101561042b57816104118882610463565b8452602084019350602083019250506001810190506103fe565b5050509392505050565b600082601f83011261044a5761044961083d565b5b813561045a8482602086016103c5565b91505092915050565b60008135905061047281610862565b92915050565b60008151905061048781610862565b92915050565b6000602082840312156104a3576104a261084c565b5b60006104b184828501610463565b91505092915050565b6000602082840312156104d0576104cf61084c565b5b60006104de84828501610478565b91505092915050565b600080604083850312156104fe576104fd61084c565b5b600061050c85828601610463565b925050602083013567ffffffffffffffff81111561052d5761052c610847565b5b61053985828601610435565b9150509250929050565b600061054f83836105e6565b60208301905092915050565b61056481610765565b82525050565b60006105758261073c565b61057f8185610754565b935061058a8361072c565b8060005b838110156105bb5781516105a28882610543565b97506105ad83610747565b92505060018101905061058e565b5085935050505092915050565b6105d181610777565b82525050565b6105e081610781565b82525050565b6105ef816107af565b82525050565b6105fe816107af565b82525050565b61060d816107b9565b82525050565b61061c816107c9565b82525050565b6000604082019050610637600083018561055b565b610644602083018461055b565b9392505050565b60006020820190508181036000830152610665818461056a565b905092915050565b600060a08201905061068260008301886105c8565b61068f6020830187610613565b61069c60408301866105d7565b6106a96060830185610604565b6106b66080830184610604565b9695505050505050565b60006020820190506106d560008301846105f5565b92915050565b60006106e56106f6565b90506106f182826107dd565b919050565b6000604051905090565b600067ffffffffffffffff82111561071b5761071a61080e565b5b602082029050602081019050919050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b60006107708261078f565b9050919050565b6000819050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b6107e682610851565b810181811067ffffffffffffffff821117156108055761080461080e565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61086b816107af565b811461087657600080fd5b5056fea2646970667358221220d6cf3de3a93e844855e4d35bfdeb73976a48c4ee93d67c631b0a5970557a0d7964736f6c63430008070033";

type RandomNumberConsumerV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RandomNumberConsumerV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RandomNumberConsumerV2__factory extends ContractFactory {
  constructor(...args: RandomNumberConsumerV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    subscriptionId: PromiseOrValue<BigNumberish>,
    vrfCoordinator: PromiseOrValue<string>,
    keyHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RandomNumberConsumerV2> {
    return super.deploy(
      subscriptionId,
      vrfCoordinator,
      keyHash,
      overrides || {}
    ) as Promise<RandomNumberConsumerV2>;
  }
  override getDeployTransaction(
    subscriptionId: PromiseOrValue<BigNumberish>,
    vrfCoordinator: PromiseOrValue<string>,
    keyHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      subscriptionId,
      vrfCoordinator,
      keyHash,
      overrides || {}
    );
  }
  override attach(address: string): RandomNumberConsumerV2 {
    return super.attach(address) as RandomNumberConsumerV2;
  }
  override connect(signer: Signer): RandomNumberConsumerV2__factory {
    return super.connect(signer) as RandomNumberConsumerV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomNumberConsumerV2Interface {
    return new utils.Interface(_abi) as RandomNumberConsumerV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomNumberConsumerV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RandomNumberConsumerV2;
  }
}

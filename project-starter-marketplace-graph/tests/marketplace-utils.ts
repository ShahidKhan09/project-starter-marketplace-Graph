import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Acceptbidandmint,
  Acceptbidandtransfer,
  Buyandmint,
  Buyandtransfer,
  Offerandmint,
  Offerandtransfer,
  OwnershipTransferred,
  Withdrawstoredinaccount
} from "../generated/Marketplace/Marketplace"

export function createAcceptbidandmintEvent(
  _seller: Address,
  _bidder: Address,
  _amount: BigInt,
  uri: string,
  mintIndex: BigInt,
  deadline: BigInt,
  v: i32,
  r: Bytes,
  s: Bytes,
  contractAddress: Address
): Acceptbidandmint {
  let acceptbidandmintEvent = changetype<Acceptbidandmint>(newMockEvent())

  acceptbidandmintEvent.parameters = new Array()

  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam(
      "mintIndex",
      ethereum.Value.fromUnsignedBigInt(mintIndex)
    )
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam(
      "v",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v))
    )
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam("r", ethereum.Value.fromFixedBytes(r))
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam("s", ethereum.Value.fromFixedBytes(s))
  )
  acceptbidandmintEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return acceptbidandmintEvent
}

export function createAcceptbidandtransferEvent(
  _seller: Address,
  _bidder: Address,
  _amount: BigInt,
  tokenId: BigInt,
  deadline: BigInt,
  v: i32,
  r: Bytes,
  s: Bytes,
  contractAddress: Address
): Acceptbidandtransfer {
  let acceptbidandtransferEvent = changetype<Acceptbidandtransfer>(
    newMockEvent()
  )

  acceptbidandtransferEvent.parameters = new Array()

  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )
  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "v",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v))
    )
  )
  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam("r", ethereum.Value.fromFixedBytes(r))
  )
  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam("s", ethereum.Value.fromFixedBytes(s))
  )
  acceptbidandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return acceptbidandtransferEvent
}

export function createBuyandmintEvent(
  _seller: Address,
  _buyer: Address,
  _amount: BigInt,
  uri: string,
  mintIndex: BigInt,
  v: i32,
  r: Bytes,
  s: Bytes,
  contractAddress: Address
): Buyandmint {
  let buyandmintEvent = changetype<Buyandmint>(newMockEvent())

  buyandmintEvent.parameters = new Array()

  buyandmintEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  buyandmintEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  buyandmintEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  buyandmintEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  buyandmintEvent.parameters.push(
    new ethereum.EventParam(
      "mintIndex",
      ethereum.Value.fromUnsignedBigInt(mintIndex)
    )
  )
  buyandmintEvent.parameters.push(
    new ethereum.EventParam(
      "v",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v))
    )
  )
  buyandmintEvent.parameters.push(
    new ethereum.EventParam("r", ethereum.Value.fromFixedBytes(r))
  )
  buyandmintEvent.parameters.push(
    new ethereum.EventParam("s", ethereum.Value.fromFixedBytes(s))
  )
  buyandmintEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return buyandmintEvent
}

export function createBuyandtransferEvent(
  _seller: Address,
  _buyer: Address,
  _amount: BigInt,
  tokenId: BigInt,
  v: i32,
  r: Bytes,
  s: Bytes,
  contractAddress: Address
): Buyandtransfer {
  let buyandtransferEvent = changetype<Buyandtransfer>(newMockEvent())

  buyandtransferEvent.parameters = new Array()

  buyandtransferEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  buyandtransferEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  buyandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  buyandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  buyandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "v",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v))
    )
  )
  buyandtransferEvent.parameters.push(
    new ethereum.EventParam("r", ethereum.Value.fromFixedBytes(r))
  )
  buyandtransferEvent.parameters.push(
    new ethereum.EventParam("s", ethereum.Value.fromFixedBytes(s))
  )
  buyandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return buyandtransferEvent
}

export function createOfferandmintEvent(
  _owner: Address,
  _bidder: Address,
  _amount: BigInt,
  uri: string,
  mintIndex: BigInt,
  v: i32,
  r: Bytes,
  s: Bytes,
  contractAddress: Address
): Offerandmint {
  let offerandmintEvent = changetype<Offerandmint>(newMockEvent())

  offerandmintEvent.parameters = new Array()

  offerandmintEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  offerandmintEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  offerandmintEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  offerandmintEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  offerandmintEvent.parameters.push(
    new ethereum.EventParam(
      "mintIndex",
      ethereum.Value.fromUnsignedBigInt(mintIndex)
    )
  )
  offerandmintEvent.parameters.push(
    new ethereum.EventParam(
      "v",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v))
    )
  )
  offerandmintEvent.parameters.push(
    new ethereum.EventParam("r", ethereum.Value.fromFixedBytes(r))
  )
  offerandmintEvent.parameters.push(
    new ethereum.EventParam("s", ethereum.Value.fromFixedBytes(s))
  )
  offerandmintEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return offerandmintEvent
}

export function createOfferandtransferEvent(
  _owner: Address,
  _bidder: Address,
  _amount: BigInt,
  tokenId: BigInt,
  v: i32,
  r: Bytes,
  s: Bytes,
  contractAddress: Address
): Offerandtransfer {
  let offerandtransferEvent = changetype<Offerandtransfer>(newMockEvent())

  offerandtransferEvent.parameters = new Array()

  offerandtransferEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  offerandtransferEvent.parameters.push(
    new ethereum.EventParam("_bidder", ethereum.Value.fromAddress(_bidder))
  )
  offerandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  offerandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  offerandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "v",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v))
    )
  )
  offerandtransferEvent.parameters.push(
    new ethereum.EventParam("r", ethereum.Value.fromFixedBytes(r))
  )
  offerandtransferEvent.parameters.push(
    new ethereum.EventParam("s", ethereum.Value.fromFixedBytes(s))
  )
  offerandtransferEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return offerandtransferEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createWithdrawstoredinaccountEvent(
  recipient: Address,
  amount: BigInt
): Withdrawstoredinaccount {
  let withdrawstoredinaccountEvent = changetype<Withdrawstoredinaccount>(
    newMockEvent()
  )

  withdrawstoredinaccountEvent.parameters = new Array()

  withdrawstoredinaccountEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  withdrawstoredinaccountEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawstoredinaccountEvent
}


import { BigInt } from "@graphprotocol/graph-ts"
import {
  Acceptbidandmint as AcceptbidandmintEvent,
  Acceptbidandtransfer as AcceptbidandtransferEvent,
  Buyandmint as BuyandmintEvent,
  Buyandtransfer as BuyandtransferEvent,
  Offerandmint as OfferandmintEvent,
  Offerandtransfer as OfferandtransferEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Withdrawstoredinaccount as WithdrawstoredinaccountEvent
} from "../generated/Marketplace/Marketplace"
import { 
  Acceptbidandmint,
  Acceptbidandtransfer,
  Buyandmint,
  Buyandtransfer,
  Offerandmint,
  Offerandtransfer,
  OwnershipTransferred,
  Withdrawstoredinaccount
 } from "../generated/schema"

export function handleAcceptbidandmint(event: AcceptbidandmintEvent): void {
  let entity = new Acceptbidandmint(event.transaction.from.toHex())
  entity._seller = event.params._seller
  entity._bidder = event.params._bidder
  entity._amount = event.params._amount
  entity.uri = event.params.uri
  entity.mintIndex = event.params.mintIndex
  entity.deadline = event.params.deadline
  entity.v = event.params.v
  entity.r = event.params.r
  entity.s = event.params.s
  entity.contractAddress = event.params.contractAddress
  entity.save()
}

export function handleAcceptbidandtransfer(event: AcceptbidandtransferEvent): void {
  let entity = new Acceptbidandtransfer(event.transaction.from.toHex())
  entity._seller = event.params._seller
  entity._bidder = event.params._bidder
  entity._amount = event.params._amount
  entity.tokenId = event.params.tokenId
  entity.deadline = event.params.deadline
  entity.v = event.params.v
  entity.r = event.params.r
  entity.s = event.params.s
  entity.contractAddress = event.params.contractAddress
  entity.save()
}

export function handleBuyandmint(event: BuyandmintEvent): void {
  let entity = new Buyandmint(event.transaction.from.toHex())
  entity._seller = event.params._seller
  entity._buyer = event.params._buyer
  entity._amount = event.params._amount
  entity.uri = event.params.uri
  entity.mintIndex = event.params.mintIndex
  entity.v = event.params.v
  entity.r = event.params.r
  entity.s = event.params.s
  entity.contractAddress = event.params.contractAddress
  entity.save()
}

export function handleBuyandtransfer(event: BuyandtransferEvent): void {
  let entity = new Buyandtransfer(event.transaction.from.toHex())
  entity._seller = event.params._seller
  entity._buyer = event.params._buyer
  entity._amount = event.params._amount
  entity.tokenId = event.params.tokenId
  entity.v = event.params.v
  entity.r = event.params.r
  entity.s = event.params.s
  entity.contractAddress = event.params.contractAddress
  entity.save()
}

export function handleOfferandmint(event: OfferandmintEvent): void {
  let entity = new Offerandmint(event.transaction.from.toHex())
  entity._owner = event.params._owner
  entity._bidder = event.params._bidder
  entity._amount = event.params._amount
  entity.uri = event.params.uri
  entity.mintIndex = event.params.mintIndex
  entity.v = event.params.v
  entity.r = event.params.r
  entity.s = event.params.s
  entity.contractAddress = event.params.contractAddress
  entity.save()
}

export function handleOfferandtransfer(event: OfferandtransferEvent): void {
  let entity = new Offerandtransfer(event.transaction.from.toHex())
  entity._owner = event.params._owner
  entity._bidder = event.params._bidder
  entity._amount = event.params._amount
  entity.tokenId = event.params.tokenId
  entity.v = event.params.v
  entity.r = event.params.r
  entity.s = event.params.s
  entity.contractAddress = event.params.contractAddress
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OwnershipTransferred(event.transaction.from.toHex())
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleWithdrawstoredinaccount(
  event: WithdrawstoredinaccountEvent
): void {
  let entity = new Withdrawstoredinaccount(event.transaction.from.toHex())
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}


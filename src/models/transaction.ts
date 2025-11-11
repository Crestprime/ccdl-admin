import { IUser } from "./user";

export interface ITransaction {
    "id": number,
    "paymentId": any,
    "amount": number,
    "source": string,
    "status": string,
    "userId": number,
    "paystackReference": any,
    "paystackTranactionId": any,
    "walletId": any,
    "itemType": any,
    "flow": string,
    "note": string,
    "type": string,
    "createdAt": string,
    "updatedAt": string,
    "WithdrawalRequest": Array<any>,
    user: Array<IUser>
}
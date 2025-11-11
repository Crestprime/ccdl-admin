import { IBuildind } from "./listing"
import { IUser } from "./user"

 export interface ISale {
    "id": number,
    analytics: {
        "totalAmountPaid": number,
        "totalSalePrice": number,
        "outstandingBalance": number,
        "paymentPlan": string
    }
    "userId": number,
    "plots": Array<number>,
    "propertyId": number,
    "paymentPlan": string,
    "profileId": any,
    "agentCode": any,
    user: IUser
    "totalPayment": number,
    "totalPaymentMade": any,
    "paymentsMade": number,
    "nextPaymentDate": string,
    "createdAt": string,
    "updatedAt": string,
    "deleted": false,
    "deletedAt": any,
    "status": string
    property: IBuildind
}

export interface IRefferal {
    "id": number,
    "email": string,
    "firstName": string,
    "lastName": string,
    "phone": any,
    "isAgent": boolean,
    "createdAt": string,
    "suspend": boolean,
    "statistics": {
        "reservations": number,
        "investments": number,
        "totalSpent": number
    }
} 
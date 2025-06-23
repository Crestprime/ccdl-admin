 export interface ISale {
    "id": number,
    "userId": number,
    "plots": Array<number>,
    "propertyId": number,
    "paymentPlan": string,
    "profileId": any,
    "agentCode": any,
    "totalPayment": number,
    "totalPaymentMade": any,
    "paymentsMade": number,
    "nextPaymentDate": string,
    "createdAt": string,
    "updatedAt": string,
    "deleted": false,
    "deletedAt": any,
    "status": string
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

export interface IUserInfo {
    "user": {
        "id": number,
        "email": string,
        "firstName": string,
        "lastName": string,
        "phone": any,
        "suspend": boolean,
        "isAgent": boolean,
        "createdAt": string,
        "updatedAt": string
    },
    "wallet": {
        "balance": number
    },
    "investments": {
        "total": number,
        "count": number
    },
    "pendingPayments": {
        "total": number,
        "count": number
    },
    "reservations": {
        "list": Array<any>,
        "count": number
    }
}

export interface IUser {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "phone": any,
    "password": string,
    "profilePicture": any,
    "roles": Array<any>,
    "type": string,
    "emailVerified": boolean,
    "addressVerified": boolean,
    "accountVerified": boolean,
    "paystackCode": string,
    "referralCode": string,
    "dob": any,
    position: string,
    "isAgent": boolean,
    "has2fa": boolean,
    "suspend": boolean,
    "createdAt": string,
    "updatedAt": string,
    "deleted": boolean,
    "deletedAt": any,
    "totalAmount": number,
    "reservations": number,
    "investments": number
}

export interface IAgent {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "phone": string,
    "password": string,
    "profilePicture": string,
    "roles": Array<any>,
    "type": string,
    "emailVerified": boolean,
    "addressVerified": boolean,
    "accountVerified": boolean,
    "paystackCode": string,
    "referralCode": any,
    "dob": any,
    "isAgent": boolean,
    "has2fa": boolean,
    "suspend": boolean,
    "createdAt": string,
    "updatedAt": string,
    "deleted": boolean,
    "deletedAt": any,
    "statistics": {
        "totalProperties": number,
        "activeProperties": number,
        "soldProperties": number,
        "totalEarnings": number
    }
}
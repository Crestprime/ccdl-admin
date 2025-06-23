import { CreateBuildingListing, IProperty } from "./listing"

export interface Iinvestment {
    "duration": number | any,
    "roi": number | any,
    "paymentFrequency": number | any,
    "minimiumInvestmentAmount": number | any,
    "propertyId": number | any,
    "status": "PENDING" | "RUNNING" | "SUSPENDED"
    "createdBy": number | any
}

export interface IinvestmentData{
    "id": number;
    "planId": number;
    "userId": number
    "status": string,
    "amount": number,
    "isDeleted": boolean,
    "deletedAt": any,
    "createdBy": any,
    "createdAt": string,
    "updatedAt": string,
    "plan": {
        "id": number;
        "duration": number,
        "roi": number,
        "paymentFrequency": number,
        "minimiumInvestmentAmount": number,
        "propertyId": number;
        "status": "PENDING" | "RUNNING" | "SUSPENDED",
        "isDeleted": boolean,
        "deletedAt": any,
        "createdBy": number;
        "createdAt": string,
        "updatedAt": string,
        "property": IProperty
    }
}

export interface InvestmentModel {
    "id": number,
    "duration": number,
    "roi": number,
    "paymentFrequency": number,
    "minimiumInvestmentAmount": number,
    "property": CreateBuildingListing,
    "status": "PENDING" | "RUNNING" | "SUSPENDED",
    "isDeleted": boolean,
    "deletedAt": string,
    "createdBy": number,
    "createdAt": string,
    "updatedAt": string
}

export interface InvestmentPlan {
    "id": number,
    "planId": number,
    "userId": number,
    "status": string,
    "amount": number,
    "isDeleted": boolean,
    "deletedAt": string,
    "createdBy": number,
    "createdAt": string,
    "updatedAt": string,
    "plan": InvestmentModel
}
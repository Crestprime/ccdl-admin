import { CreateBuildingListing } from "./listing"

export interface Iinvestment {
    "duration": number | any,
    "roi": number | any,
    "paymentFrequency": number | any,
    "minimiumInvestmentAmount": number | any,
    "propertyId": number | any,
    "status": "PENDING" | "RUNNING" | "SUSPENDED"
    "createdBy": number | any
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
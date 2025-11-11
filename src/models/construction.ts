import { IUser } from "./user"

export interface IConstruction {
    id: number,
    admin: IUser
    adminId: any
    user: IUser
    agentId: any
    "userId": number,
    "profileId": number,
    "signed": boolean,
    "projectType": string,
    "buildingType": string,
    "projectAddress": string,
    "projectDescription": string,
    "proposedStartDate": string,
    "images": Array<string>,
    "duration": number,
    "furnishingType": string,
    "cement": string,
    "roofing": string,
    "flooring": string,
    "windows": string,
    "doors": string,
    "budget": number,
    "totalPayment": number,
    priority: string,
    "paymentStructure": string,
    "status": string,
    "createdAt": string,
    "percentage": number,
    "updatedAt": string,
    "tasks": Array<ITaskData>,
    "Document": Array<string>
}

export interface ITaskData {
    "id": number,
    "projectId": number,
    "name": string,
    "description": string,
    "status": string,
    "createdBy": number,
    "modifiedBy": string,
    "createdAt": string,
    "updatedAt": string,
    "SubTasks": Array<ISubTaskData>
}

export interface ISubTaskData{
    "id": number,
    "name": string,
    "status": string,
    "createdBy": number,
    "modifiedBy": any,
    "ProjectTaskId": number,
    "createdAt": string,
    "updatedAt": string,
    "attachments": Array<string>
}

export interface ITask {
    name: string,
    description: string,
    projectId: number | any
}

export interface ISubTask {
    name: string,
    projectTaskId: number | any
}

export interface IDocument {
    "id": number,
    "documentType": string,
    "createdAt": string,
    "updatedAt": string,
    "deleted": boolean,
    "deletedAt": any,
    "status": string,
    "link": string,
    "reservationId": any,
    "documentItemType": string,
    "investmentId": any,
    "projectId": number
}

export interface IUpdate {
    "id": number,
    "projectId": number,
    "description": string,
    "userId": number,
    "createdAt": string,
    "updatedAt": string,
    "isDeleted": boolean,
    "deletedAt": any,
    "project": {
        "id": number,
        "userId": number,
        "profileId": number,
        "signed": boolean,
        "projectType": string,
        "buildingType": string,
        "projectAddress": string,
        "projectDescription": string,
        "proposedStartDate": string,
        "images": Array<string>,
        "duration": number,
        "furnishingType": string,
        "cement": string,
        "roofing": string,
        "flooring":string,
        "windows": string,
        "doors": string,
        "budget": number,
        "totalPayment": number,
        "paymentStructure": string,
        "status": string,
        "priority": string,
        "adminId": any,
        "agentId": any,
        "createdAt": string,
        "percentage": number,
        "updatedAt": string
    },
    "user": IUser
}
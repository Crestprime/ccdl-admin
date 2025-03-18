export interface CreateBuildingListing {
    "name": string,
    "category": string,
    "description": string,
    "buildingType": string,
    "tags": Array<string>,
    "bedrooms": number,
    "livingSpace": number,
    "kitchen": number,
    "bathroom": number,
    "squareFoot": number,
    "lotSize": number,
    "floors": number,
    "features": Array<string>,
    "parkingSpace": Array<string>,
    "outdorSpace": Array<string>,
    "heatingAndCooling": Array<string>,
    "energyEfficiency": Array<string>,
    "security": Array<string>,
    "yearOfConstruction": string,
    "condition": string,
    "communityAmenities": Array<string>,
    "publicTransport": Array<string>,
    "shellFinishedPrice": number,
    "finishedPrice": number,
    "media": Array<string>,
    "address": string,
    "lga": string,
    "city": string,
    "state": string,
    "country": string,
    "adminId": number,
    "isDraft": boolean
}
export interface IBuildingListingData {
    plots?: Array<{
        "id": number,
        "propertyId": number,
        "plotSize": string,
        "price": number,
        "status": string,
        "createdAt": string,
        "updatedAt": string,
        "deleted": boolean
    }>,
    property: {
        "id": number,
        "name": string,
        "category": string,
        "description": string,
        "topography": string,
        "buildingType": string,
        "tags": Array<string>,
        "bedrooms": string,
        "livingSpace": string,
        "kitchen": string,
        "bathroom": string,
        "squareFoot": string,
        "lotSize": string,
        "floors": string,
        "features": Array<string>,
        "parkingSpace": Array<string>,
        "outdorSpace": Array<string>,
        "heatingAndCooling": Array<string>,
        "energyEfficiency": Array<string>,
        "security": Array<string>,
        "yearOfConstruction": string,
        "condition": string,
        "communityAmenities": Array<string>,
        "publicTransport": Array<string>,
        "documents": Array<string>,
        "shellFinishedPrice": string,
        "finishedPrice": string,
        "buildingRestrictions": string,
        "developmentRestriction": Array<string>,
        "plots": number,
        "media": Array<string>,
        "rating": number,
        "gisData": "{}",
        "geolocation": string,
        "hasCourtCase": boolean,
        "isEncumbered": boolean,
        "approved": boolean,
        "isSoldOut": boolean,
        "isReserved": boolean,
        "address": string,
        "lga": string,
        "city": string,
        "state": string,
        "country": string,
        "uploadedByAdmin": true,
        "agentId": string,
        "adminId": number,
        "status": string,
        "isDraft": boolean,
        "isDeleted": boolean,
        "deletedAt": string,
        "createdBy": string,
        "createdAt": string,
        "updatedAt": string
    }
}
export interface CreateLandListing {
    "name": "string",
    "category": "LAND",
    "description": "string",
    "topography": "string",
    "tags": [
        "string"
    ],
    "features": [
        "string"
    ],
    "communityAmenities": [
        "string"
    ],
    "publicTransport": [
        "string"
    ],
    "buildingRestrictions": "string",
    "developmentRestriction": [
        "string"
    ],
    "plots": [
        string
    ],
    "media": [
        "string"
    ],
    "gisData": {},
    "address": "string",
    "lga": "string",
    "city": "string",
    "state": "string",
    "country": "string",
    "adminId": 0,
    "isDraft": boolean
}
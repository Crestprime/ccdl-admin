import { z } from 'zod'; 

const listingBuildingValidation = z.object({ 
    name: z.string().nonempty('Required'),
    category: z.string().nonempty('Required'),
    description: z.string().nonempty('Required'),
    buildingType: z.string().nonempty('Required'),
    tags: z.any(),
    bedrooms: z.any(),
    livingSpace: z.any(),
    kitchen: z.any(),
    bathroom: z.any(),
    squareFoot: z.any(),
    lotSize: z.any(),
    floors: z.any(),
    features: z.any(),
    parkingSpace: z.any(),
    outdoorSpace: z.any(),
    heatingAndCooling: z.any(),
    energyEfficiency: z.any(),
    security: z.any(),
    yearOfConstruction: z.string().nonempty('Required'),
    condition: z.string().nonempty('Required'),
    communityAmenities: z.any(),
    publicTransport: z.any(),
    shellFinishedPrice: z.string().nonempty('Required'),
    finishedPrice: z.string().nonempty('Required'),
    media: z.any(),
    address: z.string().nonempty('Required'),
    lga: z.string().nonempty('Required'),
    city: z.string().nonempty('Required'),
    state: z.string().nonempty('Required'),
    country: z.string().nonempty('Required'), 
    adminId: z.any(),
    isDraft: z.any(), 
    initalPaymentPercentage: z.any(),
    level1: z.any(),
    level2: z.any(),
    level3: z.any()
})

const listingLandValidation = z.object({ 
    name: z.string().nonempty('Required'),
    category: z.string().nonempty('Required'),
    description: z.string().nonempty('Required'), 
    tags: z.any(), 
    features: z.any(), 
    communityAmenities: z.any(),
    publicTransport: z.any(),
    buildingRestrictions: z.any(),
    developmentRestriction: z.any(),
    plots: z.any(),
    media: z.any(),  
    gisData: z.any(),
    address: z.string().nonempty('Required'),
    lga: z.string().nonempty('Required'),
    city: z.string().nonempty('Required'),
    state: z.string().nonempty('Required'),
    country: z.string().nonempty('Required'), 
    adminId: z.any(),
    isDraft: z.any(),
    initalPaymentPercentage: z.any(),
    level1: z.any(),
    level2: z.any(),
    level3: z.any()
}) 

const investmentValidation = z.object({
    duration: z.string().nonempty('Required'),
    roi: z.string().nonempty('Required'),
    paymentFrequency: z.string().nonempty('Required'),
    minimiumInvestmentAmount: z.string().nonempty('Required'),
    propertyId: z.string().nonempty('Required'),
    status: z.any(),
    createdBy: z.any()
})   

export { 
    listingBuildingValidation, 
    listingLandValidation,
    investmentValidation
};
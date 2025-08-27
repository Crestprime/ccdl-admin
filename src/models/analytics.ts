
export interface IHome {
    "balance": number,
    "inflow": number,
    "outflow": number,
    "investments": number,
    "ongoingProjects": number,
    "reservations": number
}

export interface IReservation {
    "totalRevenue": number,
    "outstanding": number,
    "totalPropertiesSold": number,
    "totalReservations": number
}

export interface IAInvestment {
    "totalInvestmentsAmount": number,
    "totalMaturedAmount": number,
    "uniqueInvestorsCount": number,
    "pendingPayoutsCount": number
}

export interface IAWallet {
    "balance": number,
    "inflow": number,
    "outflow": number,
    "totalInvestments": number
}
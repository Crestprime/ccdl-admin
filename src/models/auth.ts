
export interface ILogin {
    email: string
}

export interface IVerify {
    token: string
}

export interface Iinvite {
    id: any
}

export interface InviteData {
    createdAt: string;
    createdBy: any;
    deletedAt: any;
    email: string;
    firstName: string;
    id: number;
    isDeleted: boolean;
    lastName: string;
    position: string;
    status: string;
    updatedAt: string;
    workspaces: Array<string>
}


export interface IAdminData { 
    email: string;
    firstName: string;  
    lastName: string;
    position: string; 
    workspaces: Array<string>;
    profilePicture?: string
}
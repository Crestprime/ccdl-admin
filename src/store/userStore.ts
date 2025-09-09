// src/store/useCounterStore.ts\
import type { IAdminSession } from '@/helper/models/user';
import { create } from 'zustand'; 

interface UserState { 
    userDetails: IAdminSession | null;
    setUserDetails: (userDetails: IAdminSession) => void;
}

export const useUserStore = create<UserState>((set) => ({ 
    userDetails: {} as IAdminSession,  
    setUserDetails: (userDetails: IAdminSession) => set({ userDetails }), 
}));

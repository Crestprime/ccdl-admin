// src/store/useCounterStore.ts\
import { create } from 'zustand'; 

interface LinkState { 
    linkPath: Array<string>;
    setLinkPath: (linkPath: any) => void;
}

export const useLinkStore = create<LinkState>((set) => ({ 
    linkPath: [], 
    setLinkPath: (linkPath: any) => set({ linkPath }), 
}));

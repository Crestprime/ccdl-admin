// src/store/useCounterStore.ts\
import { create } from 'zustand'; 

interface IGetPaginationData {
    previous: string,
    next: string,
    hasPreviousPage: boolean,
    hasNextPage: boolean
}

interface PageState { 
    pageData: IGetPaginationData;
    setPageData: (userDetails: IGetPaginationData) => void;
    pageCount: number;
    setPageCount: (pageCount: number) => void;
    page: string;
    setPage: (page: string) => void;
}

export const usePaginationStore = create<PageState>((set) => ({ 
    pageData: {} as IGetPaginationData,  
    setPageData: (pageData: IGetPaginationData) => set({ pageData }), 
    pageCount: 0,
    setPageCount: (pageCount: number) => set({ pageCount }),
    page: "",  
    setPage: (page) => set({ page }), 
}));

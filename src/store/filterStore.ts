// src/store/useCounterStore.ts\
import { create } from 'zustand'; 

interface FilterState {
    search: string | any;
    setSearch: (search: string) => void;
    type: string | any;
    setType: (type: string) => void;
    status: string | any;
    setStatus: (status: string) => void;
    categories: string | any;
    setCategories: (categories: string) => void;
    currency: string | any;
    setCurrency: (currency: string) => void;
    datePicked: {
        startDate: string,
        endDate: string
    };
    setDatePicker: (datePicked: {
        startDate: string,
        endDate: string
    }) => void;
    userDetails: any;
    setUserDetails: (userDetails: any) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
    search: "",
    type: "",
    userDetails: "",
    status: "",
    currency: "",
    datePicked: {
        startDate: "",
        endDate: ""
    },
    categories: "",
    setCategories: (categories: string) => set({ categories }),
    setSearch: (search: string) => set({ search }),
    setCurrency: (currency: string) => set({ currency }),
    setType: (type: string) => set({ type }),
    setStatus: (status: string) => set({ status }),
    setUserDetails: (userDetails: any) => set({ userDetails }),
    setDatePicker: (datePicked: {
        startDate: string,
        endDate: string
    }) => set({ datePicked }),
}));

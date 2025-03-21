import { create } from 'zustand'; 

type ImageState = { 
    image: Array<any>;  
    eventImage: any
}

type Action = {  
    updateImage: (data: ImageState['image']) => void 
    updateEventImage: (data: ImageState['eventImage']) => void 
}

export const useImage = create<ImageState & Action>((set) => ({ 
    image: [],
    eventImage: null,
    updateImage: (data: any) => set(() => ({ image: data })),
    updateEventImage: (data: any) => set(() => ({ eventImage: data })),
}));
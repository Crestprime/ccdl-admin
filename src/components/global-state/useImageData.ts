import { create } from 'zustand'; 

type ImageState = { 
    image: Array<any>;  
    preview: Array<any>;  
    eventImage: any
}

type Action = {  
    updateImage: (data: ImageState['image']) => void 
    updatePreview: (data: ImageState['preview']) => void 
    updateEventImage: (data: ImageState['eventImage']) => void 
}

export const useImage = create<ImageState & Action>((set) => ({ 
    image: [],
    preview: [],  
    eventImage: null,
    updateImage: (data: any) => set(() => ({ image: data })),
    updatePreview: (data: any) => set(() => ({ preview: data })),
    updateEventImage: (data: any) => set(() => ({ eventImage: data })),
}));
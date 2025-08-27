// api.ts  
import httpService, { unsecureHttpService } from "./httpService";

// Generic type for API response
export type ApiResponse<T> = {
    data: T; // Actual data
    success: boolean; // Example of additional metadata
};

export const fetchUnsecureData = async <T>(endpoint: string): Promise<T> => {
    const response: any = await unsecureHttpService.get<ApiResponse<T>>(endpoint);
    return response.data?.data; // Extracting only the `data` field
};

export const fetchSecureData = async <T>(endpoint: string, params?: any, type?: boolean): Promise<T | null> => {

    try {
        const response: any = await httpService.get<ApiResponse<T>>(endpoint, {
            params: params
        });

        if(type) {
            return response?.data; // Extracting only the `data` field
        } else { 
            return response?.data?.data; // Extracting only the `data` field
        }
    } catch (error: any) {

        const data: any = ""

        // Example: if unauthorized, redirect to home
        // if (error?.response?.status) {
        //     window.location.href = "/";
        // }

        return data;
    }
};

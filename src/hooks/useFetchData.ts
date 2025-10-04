import { useQuery } from "@tanstack/react-query";
import { fetchSecureData, fetchUnsecureData } from "@/services/api";

export const useFetchData = <T>(endpoint: string, name: Array<string>, params?: any, type?: boolean) => {
    return useQuery({
        queryKey: [...name, endpoint, JSON.stringify(params)],
        queryFn: () => fetchSecureData<T>(endpoint, params, type),
    })
};

export const useUnsecureFetchData = <T>(endpoint: string, name: Array<string>) => {
    return useQuery({
        queryKey: [...name, endpoint],
        queryFn: () => fetchUnsecureData<T>(endpoint),
    })
};

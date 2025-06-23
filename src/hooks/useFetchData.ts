import { useQuery } from "@tanstack/react-query";
import { fetchSecureData, fetchUnsecureData } from "@/services/api";

export const useFetchData = <T>(endpoint: string, name: string, params?: any) => {
    return useQuery({
        queryKey: [name, endpoint],
        queryFn: () => fetchSecureData<T>(endpoint, params),
    })
};

export const useUnsecureFetchData = <T>(endpoint: string, name: string) => {
    return useQuery({
        queryKey: [name, endpoint],
        queryFn: () => fetchUnsecureData<T>(endpoint),
    })
};

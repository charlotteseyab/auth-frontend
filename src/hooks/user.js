import useSWR from 'swr'
import { fetcher } from '../services/config'
import { apiLogout } from '../services/auth';

export const useUser = () => {
    const { data, mutate, isLoading, error, } = useSWR('/current-user', fetcher, {
        revalidateOnFocus: false,
        refreshInterval: 0,
        revalidateOnReconnect: false,
        revalidateIfStale: false
    })

    const logout = async () => {
        try {

            await apiLogout()
            mutate(null, false)

        } catch (error) {
            console.log("Error logging out user:", error);
        }

    };

    return {
        user: data,
        refresh: mutate,
        userLoading: isLoading,
        userError: error,
        logout
    }
}
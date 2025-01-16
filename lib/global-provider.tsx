import { createContext, ReactNode, useContext } from 'react'
import { useAppwrite } from './useAppwrite'
import { getCurrentUser } from './appwrite'

interface User {
    $id: string
    name: string
    email: string
    avatar: string
}

interface GlobalContextType {
    user: User | null
    isLoggedIn: boolean
    loading: boolean
    refetch: (newParams?: Record<string, string | number>) => Promise<void>
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const { data: user, loading, refetch } = useAppwrite({
        fn: getCurrentUser,
    })
    
    const isLoggedIn = !!user

    return <GlobalContext.Provider value={{
        //@ts-ignore
        user,
        isLoggedIn,
        loading,
        //@ts-ignore
        refetch
    }}>{children}</GlobalContext.Provider>
}

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider')
    }
    return context
}
export default GlobalProvider
 
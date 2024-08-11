import { createContext, useEffect, useState } from "react";
import {type AuthContextProviderProps } from "../types";
import { type AuthResponse } from "../services/authAPI";
import { USER_AUTH_INITIAL_STATE } from "../utils/constants";
import useLocalStorage from "../hooks/useLocalStorage";

export interface AuthContextProps {
    userAuth:  UserResponse | null,
    setUserAuth:  React.Dispatch<React.SetStateAction<UserResponse>>

}

export interface UserResponse extends AuthResponse {
    isLoading: boolean,
    isAutenthicated: boolean
}


export const AuthContext = createContext<AuthContextProps>({
    userAuth: null,
    setUserAuth: () => {}
})


const AuthProvider = ({ children }: AuthContextProviderProps) => {
    const [ userAuth, setUserAuth ] = useState<UserResponse>(USER_AUTH_INITIAL_STATE)
    const {getItem} = useLocalStorage("userData")

    useEffect(() => {
        const userInLocalStorage =  getItem("userData")
        if(userInLocalStorage) {
            const userInfo = userInLocalStorage
            setUserAuth((prev: UserResponse) => ({
                ...prev,
                success: true,
                data: userInfo,
                isAutenthicated: true,
            }))
            return
        }
     
    }, [setUserAuth, getItem])


    return (    
        <AuthContext.Provider value={{userAuth, setUserAuth}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider
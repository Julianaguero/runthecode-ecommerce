import { createContext, useEffect, useState } from "react";
import {type AuthContextProviderProps } from "../types";
import { type AuthResponse } from "../services/authAPI";

export interface AuthContextProps {
    userAuth:  UserResponse | null,
}

export interface UserResponse extends AuthResponse {
    isLoading: boolean,
    isAutenthicated: boolean
}


export const AuthContext = createContext<AuthContextProps>({
    userAuth: null,
})



export const AuthProvider = ({ children }: AuthContextProviderProps) => {
    const [ userAuth, setUserAuth ] = useState<UserResponse>({
        success: false,
        data: undefined,
        message: "",
        isLoading: false,
        isAutenthicated: false
    })

    useEffect(() => {
        const userInLocalStorage =  window.localStorage.getItem("userInfo")
        if(userInLocalStorage) {
            const userInfo = JSON.parse(userInLocalStorage)
            setUserAuth((prev: UserResponse) => ({
                ...prev,
                success: true,
                data: userInfo,
                isAutenthicated: true,
            }))
            return
        }
        console.log("user NOT found")
     
    }, [])


    return (    
        <AuthContext.Provider value={{userAuth}}>
            { children }
        </AuthContext.Provider>
    )
}
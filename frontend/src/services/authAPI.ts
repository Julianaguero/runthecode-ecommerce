import {type  UserInfo } from "../types/UserInfo";

interface UserCredentials {
    name: string,
    email: string,
}

export interface AuthResponse {
    success: boolean,
    data?: UserInfo,
    message: string
}

export const authenticateUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
    const url: string = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/users/login`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(credentials)
        })
        if(!response.ok) {
            throw Error(`Error: ${response.statusText}`)
        }
        const data = await response.json();
        return {
            success: true,
            data: data,
            message: "Login successful"
        }
    
    } catch (error) {
        if(error instanceof Error) {
            console.error("Error during authentication", error.message)
            return {
                success: false,
                message: error.message
            }
        } else {
            console.error("Unknown error during authentication")
            return {
                success: false,
                message: "Unknown error"
            }
        }
        
    }
}


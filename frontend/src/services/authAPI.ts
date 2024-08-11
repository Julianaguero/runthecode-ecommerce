import {type  UserInfo } from "../types/UserInfo";

interface UserCredentialsProps {
    mail: string,
    password: string,
}

interface CreateUserProps extends UserCredentialsProps {
    name: string,
}

export interface AuthResponse {
    success: boolean,
    data?: UserInfo,
    message: string
}

export const authenticateUser = async (credentials: UserCredentialsProps): Promise<AuthResponse> => {
    const url: string = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/user/signin`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(credentials)
        })
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Unknown error');
        }
        const data : UserInfo = await response.json();
        window.localStorage.setItem("userData", JSON.stringify(data))
        return {
            success: true,
            data: data,
            message: "Successful login"
        }
    
    } catch (error) {
        if(error instanceof Error) {
            
            console.error("Error during authentication", error.message)
            return {
                success: false,
                message: error.message || 'An error occurred during login.',
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

export const createUser = async (credentials: CreateUserProps): Promise<AuthResponse> => {
    const url: string = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/user/signup`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(credentials)
        })
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Unknown error');
        }
        const data: UserInfo = await response.json();
        
        window.localStorage.setItem("userData", JSON.stringify(data))
        return {
            success: true,
            data: data,
            message: "New user created"
        }
    
    } catch (error) {
        if(error instanceof Error) {
            
            console.error("Error during authentication", error.message)
            return {
                success: false,
                message: error.message || 'An error occurred during sing up.',
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

export default {createUser, authenticateUser}
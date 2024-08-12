import { useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { createUser } from "../services";
import useAuth from "./useAuth";

interface AuthSignUpProps {
    navigate: NavigateFunction,
    redirect: string
}

function useAuthSignUp({navigate, redirect}: AuthSignUpProps) {
    const { userAuth, setUserAuth } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [userData, setUserData] = useState({
      name: "",
      mail: "",
      password: "",
      confirmPassword: "",
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUserData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if(userData.password !== userData.confirmPassword){
        return setError("Passwords doesn't match...")
      } 
      const verifiedUserData = {
        name: userData.name,
        mail: userData.mail,
        password: userData.password
      }
  
      setUserAuth((prev) => ({
        ...prev,
        isLoading: true,
      }));
      setError(null);
      try {
        const response = await createUser(verifiedUserData);
        if (response.success) {
          setUserAuth({
            success: response.success,
            data: response.data,
            message: response.message,
            isLoading: false,
            isAutenthicated: true,
          });
          navigate(redirect);
        } else {
          console.log(response);
          setError(response.message);
          setUserAuth((prev) => ({
            ...prev,
            isLoading: false,
            isAutenthicated: false,
          }));
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An error occurred during login. Please try again.";
        setError(errorMessage);
        console.error("Error during login:", errorMessage);
        setUserAuth((prev) => ({
          ...prev,
          isLoading: false,
          isAutenthicated: false,
        }));
      }
    };
  

  return { userAuth, userData, handleChange, handleSubmit, error };
}

export default useAuthSignUp;

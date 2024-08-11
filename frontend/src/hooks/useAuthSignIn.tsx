import { useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { authenticateUser } from "../services";
import useAuth from "./useAuth";

interface AuthSignUpProps {
    navigate: NavigateFunction,
    redirect: string
}

function useAuthSignIn({navigate, redirect}: AuthSignUpProps) {
  const { userAuth, setUserAuth } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUserAuth((prev) => ({
      ...prev,
      isLoading: true,
    }));
    setError(null);
    try {
      const response = await authenticateUser(userData);
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

export default useAuthSignIn;

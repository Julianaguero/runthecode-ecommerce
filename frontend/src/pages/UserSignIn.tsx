import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { InnerAnimation, GenericButton, SectionTitle } from "../components";
import { useEffect, useState } from "react";
import picture from "../assets/web_nike_sneaker_6.webp";

import { useAuth } from "../hooks";
import { authenticateUser } from "../services/";
import FormInput from "../components/login-form/FormInput";
import {  userSignInInputs } from "../utils/data";

const UserSignIn = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

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

  useEffect(()=> {
    if(userAuth?.isAutenthicated) {
      navigate(redirect)
    }
  }, [userAuth?.isAutenthicated, navigate, redirect])

  return (
    <InnerAnimation>
      <Helmet>
        <title>Sign in</title>
        <meta name="description" content="Shop our latest products now." />
        <link rel="canonical" href="runthecode-ecommerce.onrender.com/user/signin" />
      </Helmet>
      <main className="max-w-[1560px] mx-auto ">
        <div className="relative flex flex-wrap flex-col md:flex-row items-center justify-center px-5 md:h-[37rem] max-w-[1560px] mx-auto mb-16">
          <div className="flex w-full md:w-[45%] h-full flex-col items-center md:justify-center justify-start  md:pl-[clamp(1rem,1vw+1rem,2rem)]">
            <div className="flex flex-col justify-center items-center mb-6 md:mb-0 min-h-[60dvh] md:min-h-[75dvh] w-[80%] xl:w-[60%]">
  
              <SectionTitle customStyle="text-yellowbright mb-4">SIGN IN</SectionTitle>
              <form onSubmit={handleSubmit} className="flex flex-col items-center lg:items-start w-[100%]">
              {userSignInInputs.map(input => (
                  <FormInput
                  key={input.id}
                  value={userData[input.name]}
                  handleChange={handleChange}
                  {...input}
                />
                ))}
                {error && <p className="text-red-600">{error}</p>}
                <GenericButton
                  title="Sign in"
                  type="submit"
                  buttonStyle="mt-4"
                />
                <p className="mt-6 self-start">New customer? <Link to="/user/signup" className="text-indigo-700 underline">Create your account</Link></p>
              </form>
            </div>
          </div>
          <Link
            to="/shop"
            aria-label="Link to our shop"
            className=" sm:flex-1 md:w-1/2 w-full h-full overflow-hidden rounded-3xl "
          >
            <img
              className="w-full h-full object-cover"
              src={picture}
              alt="Nike Air Force"
            />
          </Link>
        </div>
      </main>
    </InnerAnimation>
  );
};

export default UserSignIn;

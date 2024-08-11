import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { InnerAnimation, GenericButton, SectionTitle, FormInput } from "../components";
import { useAuthSignUp } from "../hooks";
import { userInputs } from "../utils/data";
import picture from "../assets/web_nike_sneaker_6.webp";

const UserSignUp = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const {userAuth, userData, handleChange, handleSubmit, error} = useAuthSignUp({navigate, redirect})


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
        <link rel="canonical" href="user/signin" />
      </Helmet>
      <main className="max-w-[1560px] mx-auto ">
        <div className="relative flex flex-wrap flex-col md:flex-row items-center justify-center px-5 md:min-h-[37rem] max-w-[1560px] mx-auto mb-16">
          <div className="flex w-full md:w-[45%] h-full flex-col items-center md:justify-center justify-start  md:pl-[clamp(1rem,1vw+1rem,2rem)]">
            <div className="flex flex-col justify-center items-center min-h-[60dvh] md:min-h-[75dvh] w-[80%] xl:w-[60%] mt-8">
              <SectionTitle customStyle="text-yellowbright mb-4">SIGN UP</SectionTitle>
              <form onSubmit={handleSubmit} className="flex flex-col items-center lg:items-start w-[100%]">
                {userInputs.map(input => (
                  <FormInput
                  key={input.id}
                  value={userData[input.name]}
                  handleChange={handleChange}
                  {...input}
                />
                ))}
                <GenericButton
                  title="Sign up"
                  type="submit"
                  buttonStyle="mt-4"
                /> 
                {error && <p className="text-red-600 self-start mt-4 text-lg">{error}</p>}
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

export default UserSignUp;

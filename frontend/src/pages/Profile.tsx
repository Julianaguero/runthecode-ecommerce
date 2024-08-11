import { Helmet } from "react-helmet-async";
import { InnerAnimation, GenericButton, SectionTitle } from "../components";

import { useAuth } from "../hooks";
import { USER_AUTH_INITIAL_STATE } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { userAuth, setUserAuth } = useAuth();

  const handleLogout = () => {
    setUserAuth(USER_AUTH_INITIAL_STATE);
    window.localStorage.removeItem("userData");
    navigate("redirect");
  };

  return (
    <InnerAnimation>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Edit your personal information." />
        <link rel="canonical" href="user/profile" />
      </Helmet>
      <main className="max-w-[1560px] mx-auto ">
        <div className="flex w-full md:w-[45%] min-h-[60dvh] flex-col pt-8 mb-16 gap-16 items-start  md:justify-center justify-start  md:pl-[clamp(1rem,1vw+1rem,2rem)] mx-auto">
          <div className="flex flex-col justify-start items-start h-full w-[80%] xl:w-[60%] mx-auto">
            <SectionTitle customStyle="text-yellowbright mb-4">
              Your profile
            </SectionTitle>
            <p className="text-lg mb-2">Name: {userAuth?.data?.name}</p>
            <p className="text-lg mb-2">Email: {userAuth?.data?.mail}</p>
            <h2 className="text-xl mt-4">Shipping address:</h2>
          </div>
          <GenericButton
            title="Log out"
            buttonStyle="mx-auto"
            onClick={handleLogout}
          />
        </div>
      </main>
    </InnerAnimation>
  );
};

export default Profile;

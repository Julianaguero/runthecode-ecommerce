import picture from "../../assets/web_Nike_sneaker_3.jpg";
// import oval from "../assets/Asset_1.png";
import HeroButton from "../Buttons/HeroButton";

export default function HeroBanner() {
  return (
    <div className="relative flex flex-wrap flex-col-reverse md:flex-row items-center justify-center px-5 md:h-[37rem] max-w-[1560px] mx-auto mb-16">
          <div className="flex w-full md:w-[45%] h-full flex-col items-center md:justify-center justify-start pl-6  md:pl-[clamp(1rem,1vw+1rem,2rem)] pt-32 md:pt-4 ">
            <p className="leading-tight text-black font-ginto-nord-regular text-title-h2">
            Summer <br />
              <span className="relative font-ginto-nord-regular-italic text-title-h2 text-back ml-10 after:content-asset1">
                 Collection
              </span> <br />
             2024 
            </p>
           
            <HeroButton title="EXPLORE COLLECTION" textStyle="text-[0.8rem]" buttonStyle=" mt-6 active:scale-90 active:border-prussian transition-all ease-in duration-100 " />
          </div>
          <div className=" sm:flex-1 md:w-1/2 w-full h-full overflow-hidden rounded-3xl ">
            <img
              className="w-full h-full object-cover"
              src={picture}
              alt="Nike Air Force"
            />
          </div>
          
          {/* <div className="hidden md:flex md:absolute md:left-1/2 md:right-0 md:top-0 md:bottom-0 md:bg-gradient-to-r md:from-black from-0%  md:to-transparent to-20%" /> */}
        </div>
  )
}

import picture from "../assets/picture.jpg";
import HeroButton from "./Buttons/HeroButton";

export default function HeroBanner() {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center md:h-[37rem] max-w-[1560px] mx-auto h-[29rem]">
          <div className="flex w-full md:w-1/2 h-full bg-black flex-col items-start md:justify-center justify-start pl-6 md:pl-[clamp(2rem,1vw,4rem)] pt-32 md:pt-4 ">
            <p className="text-white font-ginto-nord-regular text-[clamp(35px,4vw+1rem,15rem)]  ">
            Summer <br />
              <span className="font-semibold font-ginto-nord-regular-italic text-[clamp(35px,4vw+1rem,15rem)] font-outline-2 text-black">
                {" "}
                 Collection
              </span>
            </p>
            <HeroButton title="Shop now!" textStyle="text-[1rem] md:text-[2.5rem]" buttonStyle="mt-6 active:scale-90 active:border-prussian transition-all ease-in duration-100 " />
          </div>
          <div className="hidden md:flex flex-1 w-1/2 h-full overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src={picture}
              alt="Nike Air Force"
            />
          </div>
          <div className="hidden md:flex md:absolute md:left-1/2 md:right-0 md:top-0 md:bottom-0 md:bg-gradient-to-r md:from-black from-0%  md:to-transparent to-20%" />
        </div>
  )
}

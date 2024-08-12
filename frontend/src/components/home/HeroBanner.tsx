import { Link } from "react-router-dom";
import picture from "../../assets/web_Nike_sneaker_3.webp";
import HeroButton from "../Buttons/HeroButton";

export default function HeroBanner() {
  return (
    <section className="relative flex flex-wrap flex-col-reverse md:flex-row items-center justify-center px-5 md:h-[37rem] max-w-[1560px] mx-auto mb-16">
          <div className="flex w-full md:w-[45%] h-full flex-col items-center md:justify-center justify-start  md:pl-[clamp(1rem,1vw+1rem,2rem)] pt-24 md:pt-4 ">
            <p className="leading-tight text-black font-ginto-nord-regular text-title-h2">
            Summer <br />
              <span className="relative font-ginto-nord-regular-italic text-title-h2 text-back ml-10 after:content-asset1">
                 Collection
              </span> <br />
             2024 
            </p>
           
            <HeroButton title="EXPLORE COLLECTION" textStyle="text-[0.8rem]" buttonStyle=" mt-6 active:scale-90 active:border-prussian transition-all ease-in duration-100 " />
          </div>
          <Link
            to="/shop"
            aria-label="Link to our shop" 
            className=" sm:flex-1 md:w-1/2 w-full h-full overflow-hidden rounded-3xl md:aspect-[8/7]">
            <img
              className="w-full h-full object-cover md:aspect-[8/7]"
              src={picture}
              alt="Nike Air Force"
            />
          </Link>
        </section>
  )
}

import { Link } from "react-router-dom";
import { type ButtonProps } from "../../types";



export default function HeroButton({buttonStyle, textStyle, title}: ButtonProps) {
  return (
    <Link 
    to="/shop"
    className={`cursor-pointer rounded-full overflow-hidden relative z-100  bg-yellowbright border-4 border-yellowbright hover:border-violet group px-8 py-2 ${buttonStyle}`}>
      <span className={`relative z-10 font-ginto-nord-bold-italic text-black group-hover:text-white ${textStyle} duration-500`}>
        {title}
      </span>
      <span className={`absolute w-full h-full bg-violet -left-60 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`}></span>
      <span className={`absolute w-full h-full bg-violet -right-60 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`}></span>
    </Link>
  );
}

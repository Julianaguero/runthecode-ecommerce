import { Link } from "react-router-dom";
import { brandList } from "../../utils/data";

export default function BrandsWrapper() {
  return (
    <div className="w-full my-20 mx-auto ">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-4 mx-auto  [&>*:nth-child(odd)]:content-start [&>*:nth-child(odd)]:rotate-[-2deg] [&>*:nth-child(even)]:self-end [&>*:nth-child(even)]:rotate-[2deg] sm:h-full  xl:h-[31rem]">
        {brandList.slice(0, 3).map(({ path, backImg, name }) => (
          <li
            className="w-[18rem] xl:w-[22rem] h-[22rem] xl:h-[27rem] mx-auto"
            key={path}  
          >
            <Link 
              to={path} 
              className="aspect-[4/3]"
            >
              <img
                src={backImg}
                alt={`${name} logo`}
                className="relative w-[18rem] xl:w-[22rem] h-[22rem] xl:h-[27rem] object-cover rounded-xl product-shadow-violet hover:scale-[.98] transition-all duration-250 "
              />
           
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

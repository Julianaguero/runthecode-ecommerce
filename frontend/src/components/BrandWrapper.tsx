import { Link } from "react-router-dom";
import { brandList } from "../lib/data";

export default function BrandWrapper() {
  return (
    <div className="w-full max-w-[1940px] h-full my-20 mx-auto">
      <ul className="grid md:grid-cols-4 grid-cols-2 mx-auto gap-4 px-8">
        {brandList.map(({ path, brandImg, backImg, name }) => (
          <li
            key={path}
            className={`group w-[minmax(250px,500px)]  border-2 relative overflow-hidden active:scale-95 transitition-all duration-100 `}
          >
            <Link to={path}>
              <img
                src={brandImg}
                alt={`${name} logo`}
                className="w-full h-full z-10 relative opacity-90 group-hover:opacity-5 transition-all duration-200"
              />
              <img
                src={backImg}
                alt={`${name} logo`}
                className="absolute top-0 group-hover:top-0 object-cover w-full h-full z-0 "
              />
              <p className="text-black font-thin text-[1rem] sm:text-[4.5rem] absolute  group-hover:top-1/2 -top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-center opacity-75 bg-white transition-all ease-in duration-150 ">
                [ show more... ]
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

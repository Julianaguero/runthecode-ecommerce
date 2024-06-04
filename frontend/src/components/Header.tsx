import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Cart } from ".";
import { links } from "../utils/data";
import { HiOutlineUser } from "react-icons/hi";
import FramerMagnetic from "./FramerMagnetic";

export default function Header() {
  return (
    <motion.header 
      className="sticky top-0 w-full max-w-[1560px] mx-auto flex items-center justify-between h-20 p-5 z-50 bg-white/90"
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{ 
        ease: "easeInOut",
        duration: 0.4,
       }}
    >
      <div className="h-12 w-auto">
        {/* CAMBIAR DIV POR LINK para produccion */}
        <div className="h-12" >
          <img
            className="h-12"
            typeof="svg"
            src="src/assets/logo.svg"
            alt="runthecode sneaker store"
          />
        </div>
      </div>
      <nav className="flex flex-1 w-1/2  justify-center ">
        <ul className="flex gap-8">
          {links.map((link) => (
            
            <FramerMagnetic key={link.name}>
              <li  className="group relative px-4 py-3">
                <NavLink
                  to={link.path}
                  className="group inherit font-ginto-nord-regular text-lg  hover:font-bold group-active:text-[1rem] focus:font-bold transition-all ease-linear duration-100 "
                >
                  {link.name}

                  <div className="underline-dot group-hover:scale-100 group-active:scale-50  group-focus:scale-75 transition ease-linear duration-150 " />
                </NavLink>
              </li>
            </FramerMagnetic>
          ))}
        </ul>
      </nav>
      <nav className="flex gap-5">
        <NavLink 
          to="/"
          aria-label="user login"
        >
          <HiOutlineUser className="w-6 h-6 hover:text-persimmon" />
        </NavLink>
        <div>
        <Cart />

        </div>
      </nav>
    </motion.header>
  );
}

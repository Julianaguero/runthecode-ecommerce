import { motion } from "framer-motion";
import { Cart, LogoContainer, MainNav, SearchBar, UserIconContainer } from "../index";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 w-full max-w-[1560px] mx-auto 
      md:flex md:items-center md:justify-between md:h-20 p-5 z-50 bg-white/90 
      grid grid-cols-2 items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.4,
      }}
    >
      <LogoContainer />
      <MainNav />
      <nav className="w-full sm:40 md:w-80 flex self-start items-center justify-end gap-2 md:gap-5 order-2 md:order-3 place-self-end">
        <SearchBar />
        <UserIconContainer />
        <Cart />
      </nav>
    </motion.header>
  );
}

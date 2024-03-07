import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { VariantsProps } from "../../types";

type InnerAnimationProps = {
    children: React.ReactNode
}
  

export default function InnerAnimation({
  children,
}: InnerAnimationProps) {
  const location = useLocation();

  const anim = (variants: VariantsProps) => {
    return { initial: "initial", animate: "enter", exit: "exit", variants };
  };

  const translate: VariantsProps = {
    initial: { top: "0" },
    enter: {
      top: "-100vh",
      transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "0",
      transition: { duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const text: VariantsProps = {
    initial: {
      opacity: 1,
      disabled: false, 
    },

    enter: {
      opacity: 0,
      top: "-250px",
      
      // transitionEnd: {
      //   display: "none",
      // },    
      transition: {duration: .4, delay: .2, ease: [0.76, 0, 0.24, 1]},
    },
    exit: {
      top: "-250px",
      disabled: true, 
      transition: { duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <motion.div
        {...anim(translate)}
        className="fixed bg-prussian top-0 left-0 w-screen h-screen origin-bottom z-50 pointer-events-none"
      />
      <motion.p className="fixed left-1/2 -translate-x-1/2 z-50 text-center text-[3rem] text-white top-[40%] " {...anim(text)}>
        { location.pathname === "/" ? "/we are runthecode" : location.pathname.slice(location.pathname.lastIndexOf("/")) }
      </motion.p>
      <div>{children}</div>
    </>
  );
}

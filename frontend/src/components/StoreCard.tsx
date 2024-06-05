import { useRef } from "react";
import { storesLocationData } from "../utils/data"
import { motion, useScroll, useTransform } from "framer-motion";

import { ClockIcon, LocationIcon, PhoneIcon } from "./icons/index"



type StoreLocationProps = (typeof storesLocationData)[number]

export default function StoreCard({ name, address, phoneNumber, time, imgUrl}: StoreLocationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0 ,1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0 ,1], [0.6, 1]);
  

  return (
    <motion.article className="flex w-full mb-20 flex-col-reverse md:flex-row md:even:flex-row-reverse mx-auto max-w-[1920px] items-center justify-center"
    ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress,
    }}
    >
        <div className="flex  flex-col items-start md:w-1/2 h-full tracking-widest leading-7 md:pl-[2rem] lg:pl-[4rem] py-[4rem] sm:px-0 px-6">
            <h3 className="font-bold  text-[clamp(1.3rem,75%,1.5rem)] mb-4 text-prussian">{name}</h3>
            <ul className="md:text-[0.8rem] lg:text-[1.1rem]">
                <li className="flex items-center gap-2 "><LocationIcon className="text-persimmon text-[1.2rem]"/>Address: {address}</li>
                <li className="flex items-center gap-3 "><PhoneIcon className="text-persimmon text-[1rem]"/> Phone: {phoneNumber}</li>
                <li className="flex items-center gap-2 "><ClockIcon className="text-persimmon text-[1.3rem]"/>{time}</li>
            </ul>
        </div>
        <div className="flex flex-1 md:w-1/2">
            <img src={imgUrl} alt="Our store image" />
        </div>
    </motion.article>
  )
}

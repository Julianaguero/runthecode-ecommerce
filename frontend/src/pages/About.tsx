import React from "react";
import { Helmet } from "react-helmet-async";
import { InnerAnimation, StoreCard } from "../components";
import imgStore from "../assets/web_nike_sneaker_5.jpg";
import { storesLocationData } from "../lib/data";
import { motion } from "framer-motion";

// type StoreLocationProps = (typeof storesLocationData)[]

export default function About() {
  return (
    <InnerAnimation>
      <Helmet>
        <title>About us | runthecode</title>
        <meta name="description" content="Check our stores!." />
        <link rel="canonical" href="/shop" />
      </Helmet>
      <main>
        <motion.section
          className="flex w-full flex-col-reverse md:flex-row md:even:flex-row-reverse mx-auto max-w-[1920px] md:h-1/2 items-center justify-center mb-10"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <p className="flex  flex-col items-start md:w-1/2 h-full tracking-widest leading-7 font-300 md:px-[2rem] lg:px-[4rem] py-[4rem] sm:px-[2rem] px-6 text-[clamp(0.8rem,0.34vw+0.96rem,1.1rem)]">
            Somos runthecode, una tienda que nació hace un año con la intención
            de ofrecer productos de alta calidad y estilo exclusivo a sus
            clientes. Inspirados en las grandes tiendas europeas y
            norteamericanas, intentamos destacar por variedad de modelos y
            precios competitivos en el mercado. Con un equipo de expertos en
            moda y tendencias, hemos logrado posicionarnos como una de las
            favoritas entre los amantes de los sneakers en la ciudad.
          </p>
          <div className="flex flex-1 md:w-1/2 h-full z-0">
            <img
              src={imgStore}
              alt="Our store image"
              className="w-full md:h-[50vh] lg:h-full object-cover "
            />
          </div>
        </motion.section>
        <section>
          <h2 className="text-center text-[2.5rem] md:text-[2rem] font-400 my-32 ">
            Our stores
          </h2>
          {storesLocationData.map((store, index) => (
            <React.Fragment key={index}>
              <StoreCard {...store} />
            </React.Fragment>
          ))}
        </section>
      </main>
    </InnerAnimation>
  );
}

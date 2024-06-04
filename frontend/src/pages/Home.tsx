import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { BrandsBanner, HeroBanner } from "../components/index";
import Spinner from "../components/Spinner";
import InnerAnimation from "../components/layout/InnerAnimation";
import Stripes from "../components/layout/Stripes";

const ProductsBanner = lazy(() => import('../components/home/ProductsBanner'))

export default function Home() {
  return (
    <InnerAnimation>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="We are a premium sneaker store. Here you can find the trendiest shoes"
        />
        <link rel="canonical" href="/home" />
      </Helmet>
      <main className="overflow-hidden mx-auto max-w-[1900px]">
        <section>
          {/* <div className="w-screen h-[4rem] sm:h-full md:mb-20 mb-10 mx-auto max-w-[1900px] overflow-hidden">
            <video
              className="w-10/12  h-full object-cover mx-auto"
              autoPlay
              loop
              typeof="video/mp4"
            >
              <source src="src/assets/adidas_banner.mp4" />
            </video>
          </div> */}
          <HeroBanner />
          <Stripes />
          {/* <h3 className="my-40 mx-auto text-center text-4xl md:text-[4rem]">- Top premium brands -</h3> */}
          <Suspense fallback={<Spinner />}>
            <ProductsBanner />
          </Suspense>
          <BrandsBanner />
        </section>
      </main>
    </InnerAnimation>
  );
}

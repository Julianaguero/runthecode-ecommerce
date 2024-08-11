import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { BrandsBanner, HeroBanner, InnerAnimation, Stripes, CustomMessagePage } from "../components/index";

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

          <HeroBanner />
          <Stripes />
          {/* <h3 className="my-40 mx-auto text-center text-4xl md:text-[4rem]">- Top premium brands -</h3> */}
          <Suspense fallback={<CustomMessagePage type="isLoading" />}>
            <ProductsBanner />
          </Suspense>
          <BrandsBanner />

      </main>
    </InnerAnimation>
  );
}

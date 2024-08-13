import { lazy, Suspense } from "react";
import {
  BrandsBanner,
  HeroBanner,
  Stripes,
  CustomMessagePage,
  HomeLayout,
} from "../components/index";

const ProductsBanner = lazy(() => import("../components/home/ProductsBanner"));

export default function Home() {
  return (
    <HomeLayout>
      <main className="overflow-hidden mx-auto max-w-[1900px]">
        <HeroBanner />
        <Stripes />
        <Suspense fallback={<CustomMessagePage type="isLoading" />}>
          <ProductsBanner />
        </Suspense>
        <BrandsBanner />
      </main>
    </HomeLayout>
  );
}

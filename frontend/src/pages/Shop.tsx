import { Suspense, lazy, useContext } from "react";
import { Helmet } from "react-helmet-async";
import {
  // Products,
  Spinner,
  InnerAnimation,
  // FiltersBar,
  ErrorCard,
  // Breadcrumbs,
} from "../components/index";
import { FiltersContext } from "../context/FiltersContext";
import { type BreadcrumbsProps } from "../types";

const Products = lazy(() => import("../components/shop/Products"));
const Breadcrumbs = lazy(() => import("../components/shop/Breadcrumbs"));
const FiltersBar = lazy(() => import("../components/FiltersBar"));

export default function Shop() {
  const filtersContext = useContext(FiltersContext);
  // Comprobación de nulidad antes de acceder a filteredProducts
  const filteredProducts = filtersContext?.productsToRender;
  const isLoading = filtersContext?.isLoading;
  const fetchProductsError = filtersContext?.error;
  const filteringError = filtersContext?.filteringError;

  const checkErrors = (): string => {
    let error = "";

    if (fetchProductsError !== null && fetchProductsError) {
      return (error = fetchProductsError);
    } else if (filteringError !== null && filteringError) {
      return (error = filteringError);
    } else {
      return error;
    }
  };

  console.log("checkErrors: ");
  console.log(checkErrors());
  console.log("checkErrors: length");
  console.log(checkErrors().length);

  const breadcrumbPath: BreadcrumbsProps[] = [{ name: "Shop", url: "/shop" }];

  return (
    <InnerAnimation>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="Shop our latest products now." />
        <link rel="canonical" href="/shop" />
      </Helmet>
      <main className="max-w-[1560px] mx-auto ">
        {/* MOVE <SearchBar /> to header */}
        <Suspense fallback={<Spinner />}>
          <aside>
            <Breadcrumbs breadcrumbPath={breadcrumbPath} />
          </aside>
          <section className="w-full mx-auto mb-10 flex flex-col justify-start sm:gap-2">
            <aside className="flex flex-row items-center justify-start gap-6 w-full px-6 py-2">
              <FiltersBar />
            </aside>
            {isLoading && <Spinner />}
            {checkErrors().length > 0 && <ErrorCard error={checkErrors()} />}
            {filteredProducts && checkErrors().length === 0 && (
              <Products filteredProducts={filteredProducts} />
            )}
          </section>
        </Suspense>
      </main>
    </InnerAnimation>
  );
}


function wait (time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
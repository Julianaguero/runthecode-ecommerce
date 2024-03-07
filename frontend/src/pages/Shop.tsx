import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import {
  Products,
  Spinner,
  InnerAnimation,
  FiltersBar,
  ErrorCard,
  Breadcrumbs,
} from "../components/index";
import { useFetchProducts } from "../hooks/index";
import { FiltersContext } from "../context/FiltersContext";
import { type BreadcrumbsProps, type ProductsProps } from "../types";

export default function Shop() {
  const { isLoading } = useFetchProducts<ProductsProps>();
  const filtersContext = useContext(FiltersContext);
  // Comprobación de nulidad antes de acceder a filteredProducts
  const filteredProducts = filtersContext?.productsToRender;
  const error = filtersContext?.error;

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
        <aside>
          <Breadcrumbs breadcrumbPath={breadcrumbPath} />
        </aside>
        <section className="w-full mx-auto flex flex-col justify-start sm:gap-2">
          <aside className="flex flex-row items-center justify-start gap-6 w-full px-6 py-2">
              <FiltersBar />
          </aside>
          {isLoading && <Spinner />}
          {error && <ErrorCard error={error} />}
          {filteredProducts && !error && (
            <Products filteredProducts={filteredProducts} />
          )}
        </section>
      </main>
    </InnerAnimation>
  );
}

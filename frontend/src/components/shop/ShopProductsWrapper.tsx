import { useFilters, useProducts } from "../../hooks";
import {FiltersBar, CustomMessagePage, ErrorCard, Products, BrandFilter, PriceFilter} from "../index";


function ShopProductsWrapper() {
  const { listOfProducts } = useProducts();
  const { filteredProducts, isLoading, filtersError, setFilters } = useFilters({
    listOfProducts,
  });

  return (
    <section className="w-full mx-auto mb-10 flex flex-col justify-start sm:gap-2">
      <aside className="flex flex-row items-center justify-start gap-6 w-full px-6 py-2">
        <FiltersBar>
            <BrandFilter  changeFilters={setFilters} />
            <PriceFilter changeFilters={setFilters} />
        </FiltersBar>
      </aside>
      {isLoading && <CustomMessagePage type="isLoading" />}
      {filtersError && <ErrorCard error={filtersError} />}
      {!filtersError && filteredProducts && <Products filteredProducts={filteredProducts} />}
    </section>
  );
}

export default ShopProductsWrapper;

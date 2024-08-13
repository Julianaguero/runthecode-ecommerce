import { type CollectionsProps } from "../../types";
import {
  CustomMessagePage,
  SectionTitle,
  ErrorCard,
  Products,
  FiltersBar,
  PriceFilter,
} from "../index";
import { capitalizeWords } from "../../utils/generics";
import { useCollections, useFilters } from "../../hooks";

export default function CollectionProductsWrapper({
  collectionParam,
}: CollectionsProps) {
  const {
    products,
    isLoading: initialIsLoading,
    error: collectionError,
  } = useCollections({ collectionParam });
  const {
    filteredProducts,
    isLoading: filterIsLoading,
    filtersError,
    setFilters,
  } = useFilters({ listOfProducts: products, brand: collectionParam });

  const error = collectionError || filtersError;
  const isLoading = initialIsLoading || filterIsLoading;

  return (
    <section className="w-full mx-auto mb-10 flex flex-col justify-start sm:gap-2">
      <aside className="flex flex-row items-center justify-start gap-6 w-full px-6 py-2">
        <FiltersBar>
          <PriceFilter changeFilters={setFilters} />
        </FiltersBar>
      </aside>

      <div className="flex flex-col">
        <SectionTitle customStyle="text-yellowbright font-outline-2-violet text-center my-4">
          This fresh {capitalizeWords(collectionParam)} collection!
        </SectionTitle>
        {isLoading && <CustomMessagePage type="isLoading" />}
        {error && <ErrorCard error={filtersError} />}
        {!error && products && <Products filteredProducts={filteredProducts} />}
      </div>
    </section>
  );
}

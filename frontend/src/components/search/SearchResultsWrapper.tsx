import { useSearch } from "../../hooks";
import { CustomMessagePage, ErrorCard, Products, SectionTitle } from "../index";

function SearchResultsWrapper({ query }: { query: string }) {
  const { searchResults, isLoading, searchError } = useSearch(query);

  return (
    <section className="w-full mx-auto mb-10 flex flex-col justify-start sm:gap-2">
      <SectionTitle customStyle="text-yellowbright font-outline-2-violet text-center my-4">
        {`Search results... ( ${searchResults.length} )`}
      </SectionTitle>
      {isLoading && <CustomMessagePage type="isLoading" />}
      {searchError && <ErrorCard error={searchError} />}
      {!searchError && searchResults && (
        <Products filteredProducts={searchResults} />
      )}
    </section>
  );
}

export default SearchResultsWrapper;

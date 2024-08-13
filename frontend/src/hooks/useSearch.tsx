import { useEffect, useState } from "react";
import { type ProductsProps } from "../types";
import { getSearch } from "../services";

type UseSearchProps = {
  searchResults: ProductsProps[];
  isLoading?: boolean;
  searchError?: string | null;
};

function useSearch(query : string | null ): UseSearchProps {
  const [searchResults, setSearchResults] = useState<ProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect(() => {
    if (query === null) return;

    const fetchSearch = async () => {
      try {
        const searchData = await getSearch(query);
        setSearchResults(searchData as ProductsProps[]);
        setSearchError(null);
      } catch (error) {
        if (error instanceof Error) {
          setSearchError(error.message);
        } else {
          setSearchError("An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearch();
  }, [query]);

  return { searchResults, isLoading, searchError };
}

export default useSearch;

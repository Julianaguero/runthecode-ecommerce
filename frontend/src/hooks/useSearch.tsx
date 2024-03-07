import { useEffect, useState } from "react";
import { type ProductsProps } from "../types";
import { getSearch } from "../services";

type UseSearchProps = {
  searchResults: ProductsProps[];
  updateSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  searchError?: string | null;
};

function useSearch(): UseSearchProps {
  const [searchTerm, updateSearchTerm] = useState<string>(" ");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<ProductsProps[]>([]);
  
  

  useEffect(() => {
    if(!searchTerm || searchTerm.length === 0 || searchTerm === " ") return;
    
    const fetchSearch = async () => {
      try {
        const searchData = await getSearch(searchTerm);
        if (searchData.length === 0) throw new Error("No products found");
        setSearchResults(searchData);
        console.log(searchData)
        setSearchError(null)
      } catch (error) {
        if (error instanceof Error) {
            setSearchError(error.message);
        }
      }
    };

    fetchSearch()
  }, [searchTerm]);

  

  return { searchResults, updateSearchTerm, searchError };
}

export default useSearch;

import { useEffect, useState } from "react";
import {
  type FilterProps,
  type ProductsProps,
  type FilteredProductProps,
} from "../types";
import getFilterProducts from "../services/getFilterProducts";

function useFilterProducts(): FilteredProductProps {
  const [filteredProducts, setFilteredProducts] =
    useState<ProductsProps[]>([]);

  const [filters, setFilters] = useState<FilterProps>({
    brand: [],
    minPrice: 0,
    maxPrice: 2000,
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilterProducts = async () => {
      try {
        const newProducts = await getFilterProducts(filters);
        setFilteredProducts(newProducts || []);
        setError(null)
      } catch (error) {
        //TODO: improve error handler
        if (error instanceof Error) {
          setError("No products found");
        } else {
          setError("An unknown error occurred");
        }
        setFilteredProducts([]);
      }
    };

    fetchFilterProducts();
  }, [filters]);

  return { filteredProducts, setFilters, error };
}

export default useFilterProducts;

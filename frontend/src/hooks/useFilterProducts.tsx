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

  console.log("useFilters:")
  console.log(filters)
  console.log("usefilters - filteredproducts:")
  console.log(filteredProducts)

  const [filteringError, setFilteringError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilterProducts = async () => {
      try {
        const newProducts = await getFilterProducts(filters);
        if (!newProducts) throw new Error("Error fetching filtered products 😪");
        console.log("fetch filter results: newProducts")
        console.log(newProducts)

        setFilteredProducts(newProducts || []);
        setFilteringError(null)
      } catch (error) {
        //TODO: improve error handler
        if (error instanceof Error) {
          setFilteringError("No products found");
        } else {
          setFilteringError("An unknown error occurred");
        }
        setFilteredProducts([]);
      }
    };

    fetchFilterProducts();
  }, [filters]);

  return { filteredProducts, setFilters, filteringError };
}

export default useFilterProducts;

import { useEffect, useMemo, useState } from "react";
import {
  type FilterProps,
  type ProductsProps,
  type FilteredProductProps,
} from "../types";
import getFilterProducts from "../services/getFilterProducts";

export type UseFilterProps = {
  listOfProducts?: ProductsProps[];
  brand?: string;
};

function useFilters({
  listOfProducts = [],
  brand = "",
}: UseFilterProps = {}): FilteredProductProps {
  const filtersInitialState: FilterProps = useMemo(() => {
    return {brand: brand ? [brand] : [],
    minPrice: 0,
    maxPrice: 2000,}
  }, [brand]) 

  const [filteredProducts, setFilteredProducts] =
    useState<ProductsProps[]>(listOfProducts);

  const [filters, setFilters] = useState<FilterProps>(filtersInitialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const isFirstRender = useRef(true);
  // const memoizedFilteredProducts = useRef<ProductsProps[] | null>(null);

  useEffect(() => {
    // Si es el primer renderizado, no hacemos nada y lo marcamos como falso
    // if (isFirstRender.current) {
    //   isFirstRender.current = false;
    //   return;
    // }

    //compare filtersInitalState with filters and returns an Initial List of Products preventing re fetch for already fetched data.
    if(listOfProducts && JSON.stringify(filters) === JSON.stringify(filtersInitialState)) {
      setIsLoading(false)
      setError(null)
      setFilteredProducts(listOfProducts)
      return 
    }

    // if (memoizedFilteredProducts.current) {
    //   setFilteredProducts(memoizedFilteredProducts.current);
    //   return;
    // }

    const fetchFilterProducts = async () => {
      try {
        const newProducts = await getFilterProducts(filters);
        // memoizedFilteredProducts.current = newProducts as ProductsProps[];
        console.log("fetchfilterProducts running");
        console.log(newProducts, "filteredproductos");

        setFilteredProducts(newProducts as ProductsProps[]);
        setError(null);
      } catch (error) {
        //TODO: improve error handler
        if (error instanceof Error) {
          setError("Sorry, no products found for this search... 😪");
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilterProducts();
  }, [filters, listOfProducts, filtersInitialState]);

  return { filteredProducts, setFilters, isLoading, filtersError: error };
}

export default useFilters;
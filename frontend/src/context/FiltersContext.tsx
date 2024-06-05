import { createContext, useRef } from "react";
import { useFetchProducts, useFilterProducts } from "../hooks";
import { type FiltersContextProps, type FilterContextProviderProps, type ProductsProps } from "../types";


export const FiltersContext = createContext<FiltersContextProps>({
  productsToRender: [],
  isLoading: false,
  setFilters: () => {},
  error: null,
  filteringError: null,

});

export default function FiltersProvider({
  children,
}: FilterContextProviderProps) {
  const { products, isLoading, error} =  useFetchProducts<ProductsProps>()

  const { filteredProducts, setFilters, filteringError} = useFilterProducts();

  const initialProducts = useRef<ProductsProps[]>([])

  initialProducts.current = products

  const productsToRender = filteredProducts.length > 0
    ? filteredProducts
    : initialProducts.current

  if (!filteredProducts || !setFilters) {
    throw new Error("Missing required values in FiltersContext.Provider");
  }

  return (
    <FiltersContext.Provider value={{ productsToRender, setFilters, isLoading, error, filteringError}}>
      {children}
    </FiltersContext.Provider>
  );
}

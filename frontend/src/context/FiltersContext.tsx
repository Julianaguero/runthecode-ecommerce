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
  console.log("filters provider - filteredProducts:")
  console.log(filteredProducts)

  const initialProducts = useRef<ProductsProps[]>([])

  initialProducts.current = products

  const productsToRender = filteredProducts.length > 0
    ? filteredProducts
    : initialProducts.current

    console.log("filters provider - productsToRender:")
    console.log(productsToRender)

  if (!filteredProducts || !setFilters) {
    throw new Error("Missing required values in FiltersContext.Provider");
  }

  return (
    <FiltersContext.Provider value={{ productsToRender, setFilters, isLoading, error, filteringError}}>
      {children}
    </FiltersContext.Provider>
  );
}

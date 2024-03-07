import { createContext, useRef } from "react";
import { useFetchProducts, useFilterProducts } from "../hooks";
import { type FiltersContextProps, type FilterContextProviderProps, type ProductsProps } from "../types";


export const FiltersContext = createContext<FiltersContextProps>({
  productsToRender: [],
  setFilters: () => {},
  error: null,
});

export default function FiltersProvider({
  children,
}: FilterContextProviderProps) {
  const { products } =  useFetchProducts<ProductsProps>()

  const { filteredProducts, setFilters, error } = useFilterProducts();

  const initialProducts = useRef<ProductsProps[]>([])

  initialProducts.current = products

  const productsToRender = filteredProducts.length > 0
    ? filteredProducts
    : initialProducts.current

  if (!filteredProducts || !setFilters) {
    throw new Error("Missing required values in FiltersContext.Provider");
  }

  return (
    <FiltersContext.Provider value={{ productsToRender, setFilters, error }}>
      {children}
    </FiltersContext.Provider>
  );
}

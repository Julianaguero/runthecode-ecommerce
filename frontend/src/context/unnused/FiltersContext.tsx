// import { createContext } from "react";
// import { useFetchFilter } from "../hooks";
// import { type FiltersContextProps, type FilterContextProviderProps } from "../types";
// // import useProducts from "../hooks/useProducts";


// export const FiltersContext = createContext<FiltersContextProps>({
//   filteredProducts: [],
//   isLoading: false,
//   setFilters: () => {},
//   filtersError: null,
// });

// export default function FiltersProvider({
//   children,
// }: FilterContextProviderProps) {
//   // const { listOfProducts, isLoading, error } = useProducts()

//   const { filteredProducts, setFilters, filtersError, isLoading} = useFetchFilter();

//   const printError = filtersError

//   console.log("first render in provider", filteredProducts)


//   if (!filteredProducts || !setFilters) {
//     throw new Error("Missing required values in FiltersContext.Provider");
//   }
  

//   return (
//     <FiltersContext.Provider value={{ filteredProducts, setFilters, isLoading, filtersError: printError}}>
//       {children}
//     </FiltersContext.Provider>
//   );
// }

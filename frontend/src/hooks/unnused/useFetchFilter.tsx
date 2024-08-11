// import { useEffect, useRef, useState } from "react";
// import {
//   type FilterProps,
//   type ProductsProps,
//   type FilteredProductProps,
// } from "../../types";
// import getFilterProducts from "../../services/getFilterProducts";

// export interface UseFilterProps {
//   initialProducts: ProductsProps[];
//   brand?: string
// }

// function useFetchFilter({initialProducts, brand }: UseFilterProps): FilteredProductProps {
//   const [filteredProducts, setFilteredProducts] =
//     useState<ProductsProps[]>(initialProducts);

//   const [filters, setFilters] = useState<FilterProps>({
//     brand: brand ? [brand] : [],
//     minPrice: 0,
//     maxPrice: 2000,
//   });
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null);

  
//   const isFirstRender = useRef(true);
//   const memoizedFilteredProducts = useRef<ProductsProps[] | null>(null)


//   useEffect(() => {
//     // Si es el primer renderizado, no hacemos nada y lo marcamos como falso
//     if (isFirstRender.current) {
//       isFirstRender.current = false;
//       return;
//     }
//     if(memoizedFilteredProducts.current) {
//       setFilteredProducts(memoizedFilteredProducts.current)
//       return
//     }


//     const fetchFilterProducts = async () => {
//       try {
//         const newProducts = await getFilterProducts(filters);
//         memoizedFilteredProducts.current = newProducts as ProductsProps[];
//         console.log("fetchfilterProducts running")

//         setFilteredProducts(newProducts  as ProductsProps[]);
//         setError(null)
//       } catch (error) {
//         //TODO: improve error handler
//         if (error instanceof Error) {
//           setError("No products found");
//         } else {
//           setError("An unknown error occurred");
//         }
//       } finally {
//         setIsLoading(false)
//       }

//     };
//     fetchFilterProducts();
//   }, [filters]);

//   return { filteredProducts, setFilters, isLoading, filtersError: error  };
// }

// export default useFetchFilter;

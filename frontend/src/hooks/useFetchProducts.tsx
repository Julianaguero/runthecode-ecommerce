import { useState, useEffect, useRef } from "react";
import { getProducts } from "../services/index";
import { type ProductsProps, type FetchProductsProps } from "../types";

function useFetchProducts(urlParam?: string): FetchProductsProps {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const memoizedProducts = useRef<ProductsProps[] | null>(null);

  useEffect(() => {
    if (memoizedProducts.current) {
      setProducts(memoizedProducts.current);
      return;
    }

    const fetchData = async () => {
      try {
        const productsData = await getProducts(urlParam);
        memoizedProducts.current = productsData as ProductsProps[];
        setProducts(productsData as ProductsProps[]);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [urlParam]);

  return { products, isLoading, error };
}

export default useFetchProducts;

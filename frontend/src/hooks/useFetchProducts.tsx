import { useState, useEffect } from "react";
import { getProducts } from "../services/index";
import { type FetchProductsProps } from "../types";

function useFetchProducts<T>(urlParam?: string): FetchProductsProps<T> {

  const [products, setProducts] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const productsData = await getProducts<T[]>(urlParam);
        if (!productsData) throw new Error("Error fetching products data");
        setProducts(productsData || []);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
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
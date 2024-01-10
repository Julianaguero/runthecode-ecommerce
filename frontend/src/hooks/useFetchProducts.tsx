import { useState, useEffect } from 'react'
import { getProducts, getBrands } from '../services/index';
import { type UseFetchProps } from '../types';

export default function useFetchProducts<T>(urlParam?: string): UseFetchProps<T> {

  const [products, setProducts] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [brands, setBrands] = useState<string[] | []>([]);

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const productsData = await getProducts<T[]>(urlParam);
        if (!productsData || productsData.length === 0) {
          throw new Error("No product data fetched");
        }
        setProducts(productsData);
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown product data error occurred");
        }
      }

      try {
        const uniqueBrands = await getBrands<string[]>();
        if (!uniqueBrands || uniqueBrands.length === 0) {
          throw new Error("No brand data fetched");
        }
        setBrands(uniqueBrands);
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown brand data error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [urlParam]);

  return { products, brands, isLoading, error };
}
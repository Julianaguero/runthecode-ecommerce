import { useState, useEffect } from 'react'
import { getProducts, getBrands } from '../services/index';
import { type UseFetchProps } from '../types';

function useFetchProducts<T>(urlParam?: string): UseFetchProps<T> {

  const [products, setProducts] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [brands, setBrands] = useState<string[] | []>([]);


  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const [productsData, uniqueBrands] = await Promise.allSettled([
          getProducts<T[]>(urlParam),
          getBrands<string[]>(),
        ]);

        if (productsData.status === 'fulfilled') {
          setProducts(productsData.value || []);
        } else {
          throw new Error(`Error fetching product data: ${productsData.reason}`);
        }

        if (uniqueBrands.status === 'fulfilled') {
          setBrands(uniqueBrands.value || []);
        } else {
          throw new Error(`Error fetching brand data: ${uniqueBrands.reason}`);
        }

        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [urlParam]);

  return { products, brands, isLoading, error };
}

export default useFetchProducts;
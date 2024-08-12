import { useEffect, useState } from "react";
import { CollectionsProps, type ErrorProp, type ProductsProps } from "../types";
import { getCollections } from "../services/getCollections";

function useCollections({ collectionParam }: CollectionsProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorProp>(null);

  useEffect(() => {
    if (!collectionParam) return;
    const fetchCollections = async () => {
      try {
        const collectionProducts = await getCollections(collectionParam);
        setProducts(collectionProducts as ProductsProps[]);
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

    fetchCollections();
  }, [collectionParam]);

  return { products, isLoading, error } as const;
}

export default useCollections;

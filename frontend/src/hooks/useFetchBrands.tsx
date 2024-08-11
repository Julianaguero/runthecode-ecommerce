import { useEffect, useRef, useState } from "react";
import { getBrands } from "../services";
import { type FetchBrandsProps } from "../types";

export default function useFetchBrands(): FetchBrandsProps {
  const [brands, setBrands] = useState<string[] | []>([]);
  const [error, setError] = useState<string | null>(null);

  //TODO: CHECK unnecesary re-renders when filter in BrandFilter changes.
  const memoizedBrands = useRef<string[] | null>(null);


  useEffect(() => {
    if(memoizedBrands.current) {
      setBrands(memoizedBrands.current)
      return
    }

    const fetchBrands = async () => {
      try {
        const uniqueBrands = await getBrands<string[]>();
        if (!uniqueBrands) throw new Error("Error fetching brands data");
         // Almacena los brands en el ref y en el state
         memoizedBrands.current = uniqueBrands;
         console.log("fetching brands")
        setBrands(uniqueBrands || []);
        setError(null); 

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchBrands();
  }, []);

  return { brands, error };
}

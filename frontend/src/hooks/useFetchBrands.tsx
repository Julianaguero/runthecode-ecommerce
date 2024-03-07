import { useEffect, useState } from "react";
import { getBrands } from "../services";
import { type FetchBrandsProps } from "../types";

export default function useFetchBrands(): FetchBrandsProps {
  const [brands, setBrands] = useState<string[] | []>([]);
  const [error, setError] = useState<string | null>(null);

  //TODO: CHECK unnecesary re-renders when filter in BrandFilter changes.

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const uniqueBrands = await getBrands<string[]>();
        if (!uniqueBrands) throw new Error("Error fetching brands data");
        setBrands(uniqueBrands || []);
        setError(null); 
         console.log("fetch")

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

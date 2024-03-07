import { useEffect, useState } from "react";
import { type FilterProps } from "../types";
import { PriceInput } from ".";

type PriceFilterProps = {
  changeFilters: (filters: (prevFilters: FilterProps) => FilterProps) => void;
};

export default function PriceFilter({ changeFilters }: PriceFilterProps) {

  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 2000,
  });

  // const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const currentPrice = event.currentTarget.value;
    const currentPriceId = event.currentTarget.id;

    setTimeout(() => {
      if (currentPrice === "") {
        if (currentPriceId === "minPrice") {
          setPrice({
            ...price,
            minPrice: 0,
          });
        } else {
          setPrice({
            ...price,
            maxPrice: 2000,
          });
        }
        return;
      }

      if (currentPrice.length === 1) return;

      if (currentPriceId === "minPrice") {
        setPrice({
          ...price,
          minPrice: +currentPrice,
        });
      } else {
        setPrice({
          ...price,
          maxPrice: +currentPrice,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    changeFilters((filters: FilterProps) => ({
      ...filters,
      minPrice: price.minPrice,
      maxPrice: price.maxPrice,
    }));
  }, [price, changeFilters]);

  return (
    <>
      <form action="" className="flex w-40 gap-5  items-center justify-center">
        <PriceInput title={"From"} id={"minPrice"} handleChange={handleChange} placeholder="0" minPrice={0} />
        <PriceInput title={"To"} id={"maxPrice"} handleChange={handleChange} placeholder="2000" maxPrice={2000} />
       
      </form>
      {/* {error && <span >{error}</span>} */}
    </>
  );
}

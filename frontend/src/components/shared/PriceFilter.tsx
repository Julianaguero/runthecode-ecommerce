import { useEffect, useState, useCallback } from "react";
import { type FilterProps } from "../../types";
import PriceInput from "./PriceInput";

type PriceFilterProps = {
  changeFilters: (filters: (prevFilters: FilterProps) => FilterProps) => void;
};

export default function PriceFilter({ changeFilters }: PriceFilterProps) {
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 2000,
  });

  const [debouncedPrice, setDebouncedPrice] = useState(price);

  // Actualiza el debounce cuando el precio cambia
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedPrice(price);
    }, 500); // Espera 500ms antes de actualizar debouncedPrice

    return () => {
      clearTimeout(handler); // Limpia el timeout si el precio cambia antes de que pase el tiempo
    };
  }, [price]);

  // Actualiza los filtros solo cuando debouncedPrice cambia
  useEffect(() => {
    changeFilters((filters: FilterProps) => ({
      ...filters,
      minPrice: debouncedPrice.minPrice,
      maxPrice: debouncedPrice.maxPrice,
    }));
  }, [debouncedPrice, changeFilters]);

  const handleChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const currentPrice = event.currentTarget.value;
    const currentPriceId = event.currentTarget.id;

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
  }, [price]);

  return (
    <>
      <form action="" className="flex w-40 gap-5  items-center justify-center">
        <PriceInput title={"From"} id={"minPrice"} handleChange={handleChange} placeholder="0" minPrice={0} />
        <PriceInput title={"To"} id={"maxPrice"} handleChange={handleChange} placeholder="2000" maxPrice={2000} />
      </form>
    </>
  );
}
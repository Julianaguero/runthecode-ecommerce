import { useEffect, useState } from "react";
import { type FilterProps } from "../types";

export default function BrandFilter({ brands, changeFilters }: { brands: string[], changeFilters: (brand: FilterProps) => void }, ) {
  const [selectedBrands, setSelectedBrands] = useState<string []>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.currentTarget.value;
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand]
    );
  };

  useEffect(() => {
    changeFilters({ brand: selectedBrands });
  }, [selectedBrands, changeFilters])

  return (
    <>
      <ul>
        {brands.map((brand, index) => (
          <li key={index} className="flex gap-2 items-center justify-start w-full">
          <input
            type="checkbox"
            id={brand}
            name="brand"
            value={brand}
            onChange={handleCheckboxChange}
            className="appearance-none relative w-4 h-4 checked:bg-persimmon/80 checked:border-0 checked:after:content-['X'] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:font-extralight after:text-white"
          />
          <label htmlFor={brand}>{brand}</label>
        </li>
        ))}
      </ul>
    </>
  );
}

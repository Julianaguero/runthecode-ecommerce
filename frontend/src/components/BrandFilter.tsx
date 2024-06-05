import { useEffect, useState } from "react";
import { type FilterProps } from "../types";
import { useFetchBrands } from "../hooks";
import {
  ArrowDownDropCircleIcon,
  ArrowDownDropCircleOutlineIcon,
} from "./Icons";

type BrandFilterProps = {
  changeFilters: (filters: (prevFilters: FilterProps) => FilterProps) => void;
};

export default function BrandFilter({ changeFilters }: BrandFilterProps) {
  const { brands } = useFetchBrands();

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  //  const brandList = useRef<string[]>([]);

  // useEffect(() => {
  //   if (brands) {
  //     // Calcular marcas únicas solo cuando las marcas cambian
  //     const uniqueBrands = brands.filter((brand, index) => brands.indexOf(brand) === index);
  //     brandList.current = uniqueBrands;
  //   }
  // }, [brands]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.currentTarget.value;

    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand]
    );
  };

  useEffect(() => {
    changeFilters((filters: FilterProps) => ({
      ...filters,
      brand: selectedBrands,
    }));
  }, [selectedBrands, changeFilters]);

  return (
    <div className="w-40 relative">
      <button
        className={` py-[0.65em] px-4 hover:border-violet/70 border-2 flex flex-row items-center justify-center gap-4 text-sm ${
          isOpen ? " bg-violet/80 text-white outline-none" : " border-prussian/80"
        }
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        Brands{" "}
        {isOpen ? (
          <ArrowDownDropCircleIcon />
        ) : (
          <ArrowDownDropCircleOutlineIcon />
        )}
      </button>
      {isOpen && (
        <ul className="absolute border-2 border-prussian/60 top-12 left-0 bg-white z-10 pr-10 pl-2 w-48 py-2 shadow-xl">
          {brands && brands.map((brand) => (
            <li
              key={brand}
              className="flex gap-2 items-center justify-start w-full cursor-pointer"
            >
              <input
                type="checkbox"
                id={brand}
                name="brand"
                checked={selectedBrands.includes(brand)}
                value={brand}
                onChange={handleCheckboxChange}
                className="cursor-pointer appearance-none relative w-3 h-3 checked:bg-persimmon/80 checked:border-0 checked:after:content-['X'] checked:after:text-[0.6em] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:font-extralight after:text-white"
              />
              <label htmlFor={brand} className="cursor-pointer text-sm">{brand}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

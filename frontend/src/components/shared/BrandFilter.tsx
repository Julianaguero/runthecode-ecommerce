import { useEffect, useState } from "react";
import { useProducts } from "../../hooks";
import { type BrandListProps, type FilterProps } from "../../types";
import {BrandCollapsibleList} from "../index";



type BrandFilterProps = {
  changeFilters: (filters: (prevFilters: FilterProps) => FilterProps) => void;
};

export default function BrandFilter({ changeFilters }: BrandFilterProps) {
  const { brands } = useProducts();

  const [selectedBrands, setSelectedBrands] = useState<BrandListProps>([]);


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
    <BrandCollapsibleList brands={brands} handleCheckboxChange={handleCheckboxChange} selectedBrands={selectedBrands}/>
  );
}

import { useContext } from "react";
import { BrandFilter, PriceFilter } from ".";
import { FiltersContext } from "../context/FiltersContext";
import IconFiltering from "./Icons/IconFiltering";

export default function FiltersBar() {
  const { setFilters } = useContext(FiltersContext);
  
  return (
    <>
      <span className="text-[2.3em]"><IconFiltering /></span>
      <BrandFilter  changeFilters={setFilters} />
      <PriceFilter changeFilters={setFilters} />
    </>
  );
}

import { useContext } from "react";
import { BrandFilter, PriceFilter } from ".";
import { FiltersContext } from "../context/FiltersContext";
import FilteringIcon from "./Icons/FilteringIcon";

export default function FiltersBar() {
  const { setFilters } = useContext(FiltersContext);

  
  
  return (
    <>
      <span className="text-[2.3em]" aria-hidden={true}><FilteringIcon /></span>
      <BrandFilter  changeFilters={setFilters} />
      <PriceFilter changeFilters={setFilters} />
    </>
  );
}

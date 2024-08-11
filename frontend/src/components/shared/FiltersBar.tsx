import FilteringIcon from "../Icons/FilteringIcon";
import { type ChildrenContext } from "../../types";

export default function FiltersBar({children} : ChildrenContext) {
  
  return (
    <>
      <span className="text-[2.3em]" aria-hidden={true}><FilteringIcon /></span>
        {children}
    </>
  );
}

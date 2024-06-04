import { useContext } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import { ProductsProps } from "../../types";
import ProductCard from "../shop/ProductCard";

export default function ProductsBanner() {
  const filtersContext = useContext(FiltersContext);
  // Comprobación de nulidad antes de acceder a filteredProducts
  const filteredProducts = filtersContext?.productsToRender;
  const error = filtersContext?.error;

  return (
    <section className="w-full mb-10 px-6">
      <h2 className="px-10 text-title-h2 font-ginto-light ">You will <span className="font-ginto-nord-medium-italic">love</span></h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8 mx-auto px-4  [&>*:nth-child(odd)]:content-end [&>*:nth-child(even)]:content-start h-[29rem] xl:h-[31rem]">
        {error && ""}
        {filteredProducts.slice(7,11).map((product: ProductsProps) => (
          <li key={product._id} className="w-[15rem] xl:w-[18rem] mx-auto hover:scale-[.98] transition-all duration-150" >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

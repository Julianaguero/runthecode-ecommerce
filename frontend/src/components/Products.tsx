import { type ProductsProps } from "../types";
import ProductCard from "./ProductCard";


export default function Products({filteredProducts} : {filteredProducts: ProductsProps[]}) {
  
  return (
    <section className="w-full">
      <ul className="grid w-full md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:grid-cols-2 grid-cols-1 gap-4 mx-auto mt-5 mb-10 px-10 ">
         { filteredProducts.map((product: ProductsProps) => (
            <li key={product._id}>
              <ProductCard product={product} />
            </li>
          ))}
      </ul>
    </section>
  );
}

import { type ProductsProps } from "../types";
import ProductCard from "./ProductCard";

export default function Products({ products }: { products: ProductsProps[] }) {


  return (
    <main>
      <ul className="grid md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-2 grid-cols-1 gap-4 mx-auto my-10 px-5 ">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product}/>
            </li>
          ))}
      </ul>
    </main>
  );
}

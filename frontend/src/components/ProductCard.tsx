import { Link } from "react-router-dom";
import { ProductsProps } from "../types";
import Rating from "./Rating";

export default function ProductCard({ product }: { product: ProductsProps }) {
  return (
    <Link
      className="relative flex flex-col items-center justify-center  p-2 border rounded-lg shadow-md"
      to={`/product/${product._id}/${product.name.replaceAll(" ", "-")}`}
    >
      <div className="h-[clamp(5rem,80%,25rem)] aspect-square flex items-center justify-center overflow-hidden">
        <img
          className="object-cover object-right-bottom h-full w-full"
          src={`${product.img}`}
          alt={`${product.name}`}
        />
      </div>
      <div className="flex flex-col w-full py-3 gap-3">
        <div >
        <p>{product.brand}</p>
        <Rating rating={product.rating} numReviews={product.numReviews}/>

        </div>
        <h3 className="font-light text-lg">{product.name}</h3>
        <strong>
          {product.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
          })}
        </strong>
      </div>
    </Link>
  );
}


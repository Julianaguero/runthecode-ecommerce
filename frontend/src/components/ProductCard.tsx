import { Link } from "react-router-dom";
import Rating from "./Rating";
import { priceToLocaleString } from "../utils/cartUtils";
import { type ProductsProps } from "../types";

export default function ProductCard({ product }: { product: ProductsProps }) {
  return (
    <Link
      className="relative flex flex-col items-center justify-center  p-2 border shadow-md"
      to={`/product/${product._id}/${product.name.replaceAll(" ", "-")}`}
    >
      <div className="group h-[clamp(5rem,80%,25rem)] aspect-square flex items-center justify-center overflow-hidden">
        <img
          className="object-cover object-right-bottom h-full w-full aspect-square group-hover:scale-110 transition-all duration-150"
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
          {priceToLocaleString(product.price)}
        </strong>
      </div>
    </Link>
  );
}


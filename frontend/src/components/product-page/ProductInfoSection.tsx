import { type ProductsProps } from "../../types";
import { priceToLocaleString } from "../../utils/cartUtils";
import Rating from "../shop/Rating";
import ButtonToCart from "./ButtonToCart";

function ProductInfoSection({ product }: { product: ProductsProps }) {

  return (
    <section className="grid md:grid-cols-2 max-w-[1560px] mx-auto mb-10 justify-center items-start top-[6rem] px-6">
      <div className="px-2 ">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="px-7 xl:px-12 md:sticky md:top-[7rem]">
        <h1 className="text-3xl xl:text-4xl pt-6 pb-4 font-semibold">
          {product.name}
        </h1>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <p className="text-md sm:text-xl mb-8 pt-4">
          {priceToLocaleString(product.price)}
        </p>
        <p className="mb-20">{product.description}</p>

        {product.itemsLeft < 5 && product.itemsLeft > 0 && (
          <span className="block text-red-700 font-bold mb-2">{`Only ${product.itemsLeft} items left! `}</span>
        )}
        <ButtonToCart product={product} />
      </div>
    </section>
  );
}

export default ProductInfoSection;

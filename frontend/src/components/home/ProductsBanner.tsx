import { Link } from "react-router-dom";
import { ProductsProps } from "../../types";
import { useProducts } from "../../hooks/";
import { ProductCard, ProductsBannerSkeleton } from "../index";

export default function ProductsBanner() {
  const { listOfProducts, isLoading } = useProducts();

  return (
    <section className="max-w-[1560px] mx-auto w-full mb-20 px-6">
      <div className="flex flex-col gap-10 sm:flex-row justify-between items-end mb-20 px-10 ">
        <h2 className="text-title-h2 font-ginto-light ">
          You will <span className="font-ginto-nord-medium-italic">love</span>{" "}
          it
        </h2>
        <Link
          to="/shop"
          className="relative font-ginto-nord-bold-italic hover:text-lightviolet hover:font-outline-2-yellow pb-4 after:content-asset2"
        >
          EXPLORE MORE
        </Link>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-4 mx-auto md:px-4 [&>*:nth-child(odd)]:content-end [&>*:nth-child(even)]:content-start sm:h-[29rem] xl:h-[31rem]">
        {isLoading && <ProductsBannerSkeleton/>}
        {!isLoading &&
          listOfProducts.slice(7, 11).map((product: ProductsProps) => (
            <li
              key={product._id}
              className="max-w-[16rem] xl:max-w-[18rem] mx-auto hover:scale-[.98] transition-all duration-150"
            >
              <ProductCard product={product} />
            </li>
          ))}
      </ul>
    </section>
  );
}

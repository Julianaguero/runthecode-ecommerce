import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { ActionButton, Breadcrumbs, ErrorCard, InnerAnimation, Rating, Spinner } from "../components";
import { useCart, useFetchProducts } from "../hooks";
import { priceToLocaleString } from "../utils/cartUtils";
import { type BreadcrumbsProps, type ProductsProps } from "../types";


export default function ProductPage() {
  const params = useParams<{ id: string }>();

  const { products, isLoading, error } = useFetchProducts<ProductsProps>(
    params.id
  );

  const { addItemToCart } = useCart()

  //Improve error handling - bottom line cause render glitch
  if (!products || products.length === 0) return
 

  // we extract the first and only object inside de Array;
  const product = products[0];

  const breadcrumbPath: BreadcrumbsProps[] = [
    { name: "Shop", url: "/shop" },
    { name: `${product.name}`, url: "/" },
  ];
  

  return (
    <InnerAnimation>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content="Shop our latest products now." />
        <link
          rel="canonical"
          href={`/product/${product._id}/${product.name.replaceAll(" ", "-")}`}
        />
      </Helmet>
      <main>
        {isLoading && <Spinner />}
        {error && <ErrorCard error={error}/>}
        {/* //TODO: BREADCRUMS BAR should hide on scroll-down and show on scroll-up for mobile */}
        <Breadcrumbs breadcrumbPath={breadcrumbPath} />

        <section className="grid md:grid-cols-2 max-w-[1560px] mx-auto mb-10 justify-center items-start top-[6rem] px-6">
          <div className="px-2">
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
            {product.itemsLeft > 0 ? (
              <ActionButton
                title={`Add to the cart`}
                buttonStyle={`w-3/4 md:w-1/2 py-3`}
                onClick={() => addItemToCart({product})}
              />
            ) : (
              <ActionButton
                title={`Out of stock`}
                buttonStyle={`w-1/2 py-3 `}
                isDisabled={true}
              />
            )}
          </div>
        </section>
      </main>
    </InnerAnimation>
  );
}

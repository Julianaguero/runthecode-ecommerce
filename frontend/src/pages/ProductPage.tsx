import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { InnerAnimation, Spinner } from "../components";
import useFetchProducts from "../hooks/useFetchProducts";
import { type ProductsProps } from "../types";

export default function ProductPage() {
  const params = useParams<{ id: string }>();

  const { products, isLoading, error } = useFetchProducts<ProductsProps>(params.id);
    
  // TODO: improve error boundaries;
  if (error) return <div>{error}</div>;
  

  if (!products || products.length === 0) {
    return <div>No product found.</div>;
  }

  // we extract the first and only object inside de Array;
  const product = products[0];

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
        <section>
          <div>
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name} />
          </div>
        </section>
      </main>
    </InnerAnimation>
  );
}

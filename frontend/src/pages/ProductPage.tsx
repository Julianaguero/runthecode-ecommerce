import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import {
  Breadcrumbs,
  InnerAnimation,
} from "../components";
import { useFetchProducts } from "../hooks";
import { type BreadcrumbsProps } from "../types";
import CustomMessagePage from "../components/layout/CustomMessagePage";
import { ProductInfoSection } from "../components/product-page";

export default function ProductPage() {
  const params = useParams<{ id: string }>();

  const { products, isLoading, error } = useFetchProducts(params.id);


  // we extract the first and only object inside de Array;
  const product = products[0];

  const breadcrumbPath: BreadcrumbsProps[] = product
    ? [
        { name: "Shop", url: "/shop" },
        { name: `${product.name}`, url: "/" },
      ]
    : [];

  return (
    <InnerAnimation>
      {isLoading && <CustomMessagePage type="isLoading" />}
      {error && <CustomMessagePage type="error" />}
      {product && (
        <>
          <Helmet>
            <title>{product.name}</title>
            <meta name="description" content="Shop our latest products now." />
            <link
              rel="canonical"
              href={`https://runthecode-ecommerce.onrender.com/product/${product._id}/${product.name.replaceAll(
                " ",
                "-"
              )}`}
            />
          </Helmet>
          <main>
            {/* //TODO: BREADCRUMS BAR should hide on scroll-down and show on scroll-up for mobile */}
            <Breadcrumbs breadcrumbPath={breadcrumbPath} />
            <ProductInfoSection product={product}/>
          </main>
        </>
      )}
    </InnerAnimation>
  );
}

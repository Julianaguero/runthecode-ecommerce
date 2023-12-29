import { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";
import { Products, SearchBar } from "../components/index";
import { ProductsProps } from "../types";
import { Helmet } from "react-helmet-async";
import InnerAnimation from "../components/layout/InnerAnimation";

export default function Shop() {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductsProps[] | []>([]);
  const [brands, setBrands] = useState<string[] | []>([]);

  useEffect(() => {
    // setIsLoading(true);

    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);

        const uniqueBrands = Array.from(
          new Set(productsData.map((item) => item.brand))
        );
        setBrands(uniqueBrands);
        // setIsLoading(false);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <InnerAnimation>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="Shop our latest products now." />
        <link rel="canonical" href="/shop" />
      </Helmet>
      <section className="p-10">
        <SearchBar />
        <div className="max-w-[1940px] w-full mx-auto flex flex-col justify-center sm:flex-row sm:gap-5">
          <aside className="hidden sm:flex sm:flex-col sm:w-[15rem] items-start">
            <div className="p-3">
              <h3 className="font-bold text-xl pb-3">Brands</h3>
              <ul>
                {brands &&
                  brands.map((brand, index) => <li key={index}>{brand}</li>)}
              </ul>
            </div>
          </aside>

          {products && <Products products={products} />}
        </div>
      </section>
    </InnerAnimation>
  );
}

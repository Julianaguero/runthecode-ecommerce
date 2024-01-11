
import { Products, SearchBar, Spinner, BrandFilter, InnerAnimation } from "../components/index";
import { Helmet } from "react-helmet-async";
import { useFetchProducts, useFilterProducts } from "../hooks/index";
import { type ProductsProps } from "../types";




export default function Shop() {
  const { products, brands, isLoading, error } = useFetchProducts<ProductsProps>();
  const { filteredProducts, setFilters } = useFilterProducts(products)
    
  console.log(filteredProducts)


  // TODO: improve error boundaries;
  if (error) {
    return <div>{error}</div>;
  }

  //TODO: async functions makes a render glitch when page is showing. FIX 
  if (!products || products.length === 0) {
    return <div>No product found.</div>;
  }

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
            <div className="p-3 w-full">
              <h3 className="font-bold text-xl pb-3">Brands</h3>
              {brands && <BrandFilter brands={brands} changeFilters={setFilters}/>}
            </div>
          </aside>

          {isLoading && <Spinner />}
          {products && <Products products={filteredProducts} />}
        </div>
      </section>
    </InnerAnimation>
  );
}

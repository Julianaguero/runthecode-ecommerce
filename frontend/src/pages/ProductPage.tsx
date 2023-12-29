import { Helmet } from "react-helmet-async";
import { ProductsProps } from "../types";
import { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";
import { useParams } from "react-router-dom";
import { InnerAnimation } from "../components";

export default function ProductPage() {
  const [product, setProduct] = useState<ProductsProps | null>(null); // Corregir el tipo
  const params = useParams<{id: string}>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData  = await getProducts(`/${params.id}`);
        //devuelvo el primer item del array
        setProduct(productsData[0]);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchData();
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <InnerAnimation>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content="Shop our latest products now." />
        <link rel="canonical" href={`/product/${product.id}/${product.name.replaceAll(" ", "-")}`} />
      </Helmet>
      <main>
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
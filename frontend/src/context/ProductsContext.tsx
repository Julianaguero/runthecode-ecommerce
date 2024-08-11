import { createContext } from "react";
import { ProductsProps } from "../types";
import { useFetchBrands, useFetchProducts } from "../hooks";

type ProductsContextProps = {
  listOfProducts: ProductsProps[];
  isLoading: boolean;
  error: string | null;
  brands: string[]
};

export const ProductsContext = createContext<ProductsContextProps>({
  listOfProducts: [],
  isLoading: false,
  error: null,
  brands: []
});

const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { products, isLoading, error } = useFetchProducts();
  const { brands } = useFetchBrands()

//   const initialProducts = useRef<ProductsProps[]>([])
//   initialProducts.current  = products


  return (
    <ProductsContext.Provider value={{ listOfProducts : products  , isLoading, error, brands }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider
import { useParams } from "react-router-dom";
import {
  type BrandsProps,
} from "../types";
import {
  CustomMessagePage,
} from "../components";
import CollectionsLayout from "../components/collections/CollectionsLayout";
import CollectionProductsWrapper from "../components/collections/CollectionProductsWrapper";

function Collections() {
  const param = useParams<{ collection: BrandsProps }>();
  const collectionParam = param?.collection;

  if(!collectionParam) return <CustomMessagePage type="isLoading" />

  return (
    <CollectionsLayout collectionParam={collectionParam}>
      <CollectionProductsWrapper collectionParam={collectionParam}/>
    </CollectionsLayout>
     
  );
}

export default Collections;

// export default function CollectionPage({ brand }: { brand: string }) {
//   const [products, setProducts] = useState<ProductsProps[] | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//       const fetchCollections = async () => {
//           try {
//               const data = await getCollections(brand);
//               setProducts(data as ProductsProps[]);
//               setError(null);  // Clear any previous errors
//           } catch (error) {
//               if (error instanceof Error) {
//                   setError(error.message);
//               } else {
//                   setError("An unknown error occurred.");
//               }
//           } finally {
//               setIsLoading(false);
//           }
//       };

//       fetchCollections();
//   }, [brand]);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//       <div>
//           {/* Render your products here */}
//           {products && products.map(product => (
//               <div key={product.id}>{product.name}</div>
//           ))}
//       </div>
//   );
// }

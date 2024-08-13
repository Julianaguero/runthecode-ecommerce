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


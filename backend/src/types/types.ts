export type ProductsDataProps = {
  _id: string;
  name: string;
  brand: string;
  style: string;
  price: number;
  itemsLeft: number;
  img: string;
  description: string;
  rating?: number;
  numReviews?: number;
}

export type UpdateProductsDataPropsParams = { productId: string }
export type UpdateProductsDataPropsBody = Omit<ProductsDataProps, "_id">

export type FilterParamsProps = {
  brand?: string | string[];
  style?: string | string[];
  price?: {
    $gte?: number;
    $lte?: number;
  }
}

export type UserProps = {
  _id: string;
  name: string;
  mail: string;
  password: string;
  isAdmin: boolean;
}





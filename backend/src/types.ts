export type ProductsDataProps = {
    _id: string;
    name: string;
    brand: string;
    style: string;
    price: number;
    itemsLeft: number;
    img: string;
    description: string;
    rating?: number,
    numReviews?: number,
  }

  export type UpdateProductsDataPropsParams = { productId: string }
  export type UpdateProductsDataPropsBody = Omit<ProductsDataProps, "_id"> 
  

  
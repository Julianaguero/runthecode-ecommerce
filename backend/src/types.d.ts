export type ProductsDataProps = {
    id: number;
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
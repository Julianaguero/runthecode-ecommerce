//.d.ts = solo exportan declaraciones, no exportan codigo

export type ProductsProps = {
    id: number;
    name: string;
    brand: string;
    style: string;
    price: number;
    itemsLeft: number;
    img: string;
    description: string;
    rating: number;
    numReviews: number;
  }

// TENER EN CUENTA QUE TS NO FUNCIONA EN RUN TIME, SI NO DE MANERA ESTATICA (EN TIEMPO DE COMPILADO)
export type ProductsPropsRating = Pick<ProductsProps, "rating" | "numReviews">

export type VariantsProps = {
  initial: object;
  enter: object;
  exit: object;
}
//.d.ts = solo exportan declaraciones, no exportan codigo

export type ProductsProps = {
  _id: string;
  name: string;
  brand: string;
  style: string;
  price: number;
  itemsLeft: number;
  img: string;
  description: string;
  rating: number;
  numReviews: number;
};

// TENER EN CUENTA QUE TS NO FUNCIONA EN RUN TIME, SI NO DE MANERA ESTATICA (EN TIEMPO DE COMPILADO)
export type ProductsPropsRating = Pick<ProductsProps, "rating" | "numReviews">

// export type BrandsListProps = {
//   brandsList: string;
// }

//Fetch types
export type FetchProductsProps<T> = {
  products: T[] | ProductsProps[];
  brands?: string[];
  isLoading: boolean;
  error: string | null;
};

export type FetchBrandsProps = {
  brands: string[];
  error: string | null;
};


export type FilterProps = {
  brand?: string[] | []
  minPrice: number;
  maxPrice: number;
};

export type FilteredProductProps = {
  filteredProducts: ProductsProps[];
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
  error: string | null;
};

export type VariantsProps = {
  initial: object;
  enter: object;
  exit?: object;
};

// Context Provider Types
export type FiltersContextProps = Omit<FilteredProductProps, "filteredProducts"> & { productsToRender: ProductsProps[], isLoading: boolean };

export type FilterContextProviderProps = {
  children: React.ReactNode;
};

export type CartContextProviderProps = FilterContextProviderProps

export type CartContextProps = {
  cart: CartItemProps[];
  addItemToCart: ({product, quantity}: CartItemProps) => void;
  removeItemFromCart: ({product}: CartItemProps) => void;

};

export type CartItemProps = {
  product: ProductsProps;
  quantity?: number;
};

export type CartItemCardProps = CartItemProps & {
  handleChangeQuantity: React.ChangeEventHandler<HTMLSelectElement>;
  removeItemFromCart: React.MouseEventHandler<HTMLButtonElement>
}

// Reducer types 

export type CartStateProps = {
  product: ProductsProps;
  quantity?: number
}

export type CartActionProps = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
  payload: CartStateProps;
}



//Button types
export type ButtonProps = {
  buttonStyle?: string,
  textStyle?: string,
  title: string,
};

export type ActionButtonProps = Partial<Pick<ButtonProps, "buttonStyle" | "title">> & {
  isDisabled?: boolean;
  onClick?: () => void;
};

export type CardButtonProps = {
  cart: CartItemProps[];
  onClick: () => void;
}

export type LinkButtonProps = {
  title: string;
  to: string;
  buttonStyle?: string;
}


//Breadcrums type
export type BreadcrumbsProps = {
  name: string;
  url: string;
};



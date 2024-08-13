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

export type BrandsProps = string
export type BrandListProps = BrandsProps[]

//Fetch types
export type ErrorProp = string | null

export type FetchProductsProps = {
  products: ProductsProps[];
  brands?: string[];
  isLoading: boolean;
  error: ErrorProp;
};

export type FetchBrandsProps = {
  brands: string[];
  error: ErrorProp;
};


export type FilterProps = {
  brand?: string[] | [];
  minPrice: number;
  maxPrice: number;
};

export type FilteredProductProps = {
  filteredProducts: ProductsProps[];
  setFilters: React.Dispatch<React.SetStateAction<FilterProps>>;
  filtersError: ErrorProp;
  isLoading: boolean
};

export type VariantsProps = {
  initial: object;
  enter: object;
  exit?: object;
};

// Context Provider Types
export type FiltersContextProps = Omit<FilteredProductProps, "filteredProducts"> & { filteredProducts: ProductsProps[], isLoading: boolean };

type ChildrenProp = React.ReactNode

type ChildrenContext = {
  children: ChildrenProp
};

export type FilterContextProviderProps = ChildrenContext;

export type CartContextProviderProps = ChildrenContext

export type CartContextProps = {
  cart: CartProps[];
  addItemToCart: ({ product, quantity }: CartItemProps) => void;
  removeItemFromCart: ({ product }: CartItemProps) => void;
};

export type CartItemProps = {
  product: ProductsProps;
  quantity?: number;
};

export type CartProps = {
  product: ProductsProps;
  quantity: number;
}

export type CartItemCardProps = CartItemProps & {
  handleChangeQuantity: React.ChangeEventHandler<HTMLSelectElement>;
  removeItemFromCart: React.MouseEventHandler<HTMLButtonElement>
}

//Auth context types 
export type AuthContextProviderProps = ChildrenContext

// Reducer types 

export type CartStateProps = CartProps

export type CartActionProps = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
  payload: CartItemProps;
}


//Button types
export type ButtonProps = {
  buttonStyle?: string,
  textStyle?: string,
  title: string,
};

export type ActionButtonProps = Partial<Pick<ButtonProps, "buttonStyle" | "title">> & {
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
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
  onClick?: () => void;
}


//Breadcrums type
export type BreadcrumbsProps = {
  name: string;
  url: string;
};

//Collection types
export interface CollectionsProps {
  collectionParam: string;
}
export interface CollectionsLayoutProps extends CollectionsProps {
  children: ChildrenProp;
}

//Filtersbar props
export interface PriceInputProps {
  id: string;
  title: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  minPrice?: number;
  maxPrice?: number;
  placeholder: string;
}

//IconProps
export interface SearchIconProps {
  customStyle?: string
}
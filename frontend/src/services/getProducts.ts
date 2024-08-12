import { type ProductsProps } from "../types";
import { errorHandler } from "../utils/errorHandler";

async function getProducts(urlParams?: string): Promise<ProductsProps[] | Error> {

    const BASE_URL = import.meta.env.VITE_API_URL

    const url = new URL('/api/products/', BASE_URL)

    //check if we search a prodId and we add it to the url
    if (urlParams) url.pathname = `/api/products/${urlParams}`;

    try {
        const response: Response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || response.statusText);
        }
        const products = (await response.json()) as ProductsProps[];

        return products;
    } catch (error) {
        return errorHandler(error)
    }
}

export default getProducts;


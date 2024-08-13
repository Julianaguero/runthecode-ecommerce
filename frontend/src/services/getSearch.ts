import { type ProductsProps } from "../types";
import { errorHandler } from "../utils/errorHandler";

const getSearch = async (query: string): Promise<ProductsProps[] | Error>=> {
    const BASE_URL = import.meta.env.VITE_API_URL    

    const url = new URL(`api/search?q=${query}`, BASE_URL)
    
    try {
        const response: Response = await fetch(url, {
            method: "GET",
        });
        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || response.statusText)
        }
        const searchedProducts = await (response.json()) as ProductsProps[];

        return searchedProducts;
    } catch (error) {
         return errorHandler(error)
    }
};

export default getSearch;
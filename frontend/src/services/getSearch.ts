import { ProductsProps } from "../types";

const BASE_URL = import.meta.env.VITE_BASE_URL


const getSearch = async (searchParam?: string): Promise<ProductsProps[]> => {

    try {
        let url: string = `${BASE_URL}/search/`

        if (searchParam) url = `${BASE_URL}/search/${searchParam}`

        const response: Response = await fetch(url, {
            method: "GET",
        });
        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(`message: ${errorResponse.code}`)
        }
        const searchedProducts = await response.json();

        return searchedProducts;
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
};

export default getSearch;
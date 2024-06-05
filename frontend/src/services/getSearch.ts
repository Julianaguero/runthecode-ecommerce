import { ProductsProps } from "../types";

const getSearch = async (searchParam?: string): Promise<ProductsProps[]>=> {
    
    try {
        let url: string = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/search/`
    
        if(searchParam) url= `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/search/${searchParam}`

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
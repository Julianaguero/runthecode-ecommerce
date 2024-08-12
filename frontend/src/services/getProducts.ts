import { type ProductsProps } from "../types";
import { errorHandler } from "../utils/errorHandler";

async function getProducts(urlParams?: string): Promise<ProductsProps[] | Error> {

    let url: string = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/products/`;

    //check if we search a prodId and we add it to the url
    if (urlParams) url = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/products/${urlParams}`;

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


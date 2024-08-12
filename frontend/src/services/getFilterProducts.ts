import { type ProductsProps, type FilterProps } from "../types";
import { errorHandler } from "../utils/errorHandler";


const getFilterProducts = async ({ brand, minPrice, maxPrice }: FilterProps): Promise<ProductsProps[] | Error> => {
    const BASE_URL = import.meta.env.VITE_API_URL

    // const url = new URL(`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/filter`)
    console.log(BASE_URL, "BASE_URL")

    const url = new URL('/api/filter', BASE_URL)
    if (brand) brand.map(singleBrand => (
        url.searchParams.append("brand", singleBrand)
    ));
    if(minPrice && minPrice > 0) url.searchParams.append("minPrice", String(minPrice))
    if(maxPrice && maxPrice < 2000) url.searchParams.append("maxPrice", String(maxPrice))
    console.log(url)

    try {
        const response = await fetch(url, {
            method: "GET",
        })
        if(!response.ok) {
            const errorResponse = await response.json()
            throw new Error(errorResponse.message || response.statusText)
        }
        const filteredProducts = await response.json() as ProductsProps[]

        return filteredProducts;

    } catch (error) {
        return errorHandler(error)
    }
}

export default getFilterProducts;
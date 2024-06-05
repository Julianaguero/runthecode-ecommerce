import { type ProductsProps, type FilterProps } from "../types";



const getFilterProducts = async ({ brand, minPrice, maxPrice }: FilterProps): Promise<ProductsProps[]> => {
    const url = new URL(`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}filter`)
    if (brand) brand.map(singleBrand => (
        url.searchParams.append("brand", singleBrand)
    ));
    if(minPrice && minPrice > 0) url.searchParams.append("minPrice", String(minPrice))
    if(maxPrice && maxPrice < 2000) url.searchParams.append("maxPrice", String(maxPrice))

    try {
        const response = await fetch(url, {
            method: "GET",
        })
        if(!response.ok) {
            const errorResponse = await response.json()
            throw new Error(`Message: ${errorResponse.code}`)
        }
        const filteredProducts = await response.json() as ProductsProps[]

        return filteredProducts;

    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }

}

export default getFilterProducts;
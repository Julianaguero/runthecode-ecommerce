import { type ProductsProps, type FilterProps } from "../types";



const getFilterProducts = async ({ brand }: FilterProps): Promise<ProductsProps[]> => {
    const url = new URL(`${import.meta.env.VITE_API_URL}filter`)
    if (brand) brand.map(singleBrand => (
        url.searchParams.append("brand", singleBrand)
    ));

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
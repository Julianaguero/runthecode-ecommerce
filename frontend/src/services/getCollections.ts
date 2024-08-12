import { type ProductsProps } from "../types";
import { errorHandler } from "../utils/errorHandler";


export const getCollections = async (brandParam: string): Promise<ProductsProps[] | Error> => {

    const url = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/collections/${brandParam}`;
    
    try {
        const response = await fetch(url, {
            method: "GET"
        })
        if (!response.ok) {
            // Parsear el error del servidor si es posible
            const errorData = await response.json();
            throw new Error(errorData.message || response.statusText);
        }
        const data = await response.json()
        return data
        console.log(data)
    } catch (error) {
        return errorHandler(error)
    }
    
}
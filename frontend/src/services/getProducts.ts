

import { type ProductsProps } from "../types";


// const API_URL = "https://jaguero.pythonanywhere.com/runthecode/"
const API_URL = "http://localhost:3000/api/products"

export async function getProducts(urlParams?: string): Promise<ProductsProps[]> {
    if(!urlParams) urlParams = "";

    try {
        const response = await fetch(API_URL + urlParams, {
            method: "GET",
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const products = (await response.json()) as ProductsProps[];
        return products;
    }
    catch (error) {
        throw new Error(`Error fetching data: ${error}`)
    }
}


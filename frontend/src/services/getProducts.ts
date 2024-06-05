// const API_URL = "https://jaguero.pythonanywhere.com/runthecode/"

const BASE_URL = import.meta.env.VITE_BASE_URL


async function getProducts<T>(urlParams?: string): Promise<T> {

    let url: string = `${BASE_URL}/products/`;

    //check if we search a prodId and we add it to the url
    if (urlParams) url = `${BASE_URL}/products/${urlParams}`;

    try {
        const response: Response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(`Message: ${errorResponse.code}`);
        }
        const products = (await response.json()) as T;

        return products;
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
}

export default getProducts;


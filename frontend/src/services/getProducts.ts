// const API_URL = "https://jaguero.pythonanywhere.com/runthecode/"

async function getProducts<T>(urlParams?: string): Promise<T> {

    let url: string = `${import.meta.env.VITE_API_URL}products/`;

    //check if we search a prodId and we add it to the url
    if (urlParams) url = `${import.meta.env.VITE_API_URL}products/${urlParams}`;

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


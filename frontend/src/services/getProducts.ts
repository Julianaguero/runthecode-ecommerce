// const API_URL = "https://jaguero.pythonanywhere.com/runthecode/"



async function getProducts<T>(urlParams?: string): Promise<T> {

    let url: string = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/products/`;

    //check if we search a prodId and we add it to the url
    if (urlParams) url = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}api/products/${urlParams}`;

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


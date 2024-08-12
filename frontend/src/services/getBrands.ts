
async function getBrands<U>(urlParam?: string): Promise<U> {

  const BASE_URL = import.meta.env.VITE_API_URL

  const url = new URL('/api/collections/', BASE_URL)

  //check if we search a prodId and we add it to the url
  if (urlParam  && urlParam !== "") url.pathname = `/api/products/${urlParam}`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(`Message: ${errorResponse.code}`)
    }

    const brandsList = response.json();

    return brandsList;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}

export default getBrands;

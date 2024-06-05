
const BASE_URL = import.meta.env.VITE_BASE_URL

async function getBrands<U>(urlParam?: string): Promise<U> {
  let url: string = `${BASE_URL}/collections/`;
  //check if we search a brand and we add it to the url
  if (urlParam && urlParam !== "") url = `${BASE_URL}/collections/${urlParam}`;

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

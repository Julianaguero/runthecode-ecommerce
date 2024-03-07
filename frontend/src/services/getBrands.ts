
async function getBrands<U>(urlParam?: string): Promise<U> {
  let url: string = `${import.meta.env.VITE_API_URL}collections/`;
  //check if we search a brand and we add it to the url
  if (urlParam && urlParam !== "") url = `${import.meta.env.API_URL}collections/${urlParam}`;

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

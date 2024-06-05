
async function getBrands<U>(urlParam?: string): Promise<U> {
  let url: string = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}collections/`;
  //check if we search a brand and we add it to the url
  if (urlParam && urlParam !== "") url = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : '/'}collections/${urlParam}`;

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

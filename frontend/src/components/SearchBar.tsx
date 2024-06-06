// TODO: el componente es funcional: 
// que el handleSubmit redirija a /search y muestre los resultados de la busqueda.

import { useState } from "react";
import { SearchIcon } from "./icons";
import { useSearch } from "../hooks";

export default function SearchBar() {
  const { updateSearchTerm, searchError } = useSearch()

  const [ searchTerm, setSearchTerm] = useState<string>("")


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!event) return
    event.preventDefault();
    
    if(!searchTerm || searchTerm === "") return

    updateSearchTerm && updateSearchTerm(searchTerm);
  };
 
// console.log(searchResults); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.currentTarget.value;
    setSearchTerm(newQuery);
  };
  


  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex justify-start items-center h-14 w-[clamp(5rem,100%,30rem)] mb-6 mx-auto px-4  border-black border rounded-full shadow-md"
    >
      <input
        className="outline-none w-full"
        type="text"
        name="query"
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        className="absolute right-2 bg-blueindigo h-10 w-10 text-white flex items-center justify-center rounded-full"
        type="submit"
      >
        <SearchIcon />
      </button>
      {searchError && (
        <span className="absolute right-16  text-red-700 font-extralight">
          {searchError}
        </span>
      )}
    </form>
  );
}

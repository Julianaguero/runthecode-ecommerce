import { ChangeEvent, FormEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [search, updateSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search === "") {
      setError("Your search is empty");
      //TODO: MEJORAR EL MANEJO DE ERRORES
      setTimeout(() => {
        setError(null);
      }, 1000);
      return ;
    }
    
    return console.log(search);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event?.target.value;
    if (newQuery === " ") return;
    updateSearch(newQuery);

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
        value={search}
        onChange={handleChange}
      />
      <button
        className="absolute right-2 bg-blueindigo h-10 w-10 text-white flex items-center justify-center rounded-full"
        type="submit"
      >
        <FaSearch />
      </button>
      {error && (
        <span className="absolute right-16  text-red-700 font-extralight">
          {error}
        </span>
      )}
    </form>
  );
}

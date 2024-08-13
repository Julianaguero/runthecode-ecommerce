import { useState, useRef, useEffect } from "react";
import { SearchIcon } from "../index";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?q=${searchTerm}`);
    setSearchTerm("")
    setIsExpanded(prev => !prev)
    };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
    setSearchTerm(event.currentTarget.value);
  };

  const handleButtonClick = () => {
    if(isExpanded && (!searchTerm || searchTerm === "")) {
      setError("Insert at least one letter. 🤣");
      return;
    }
    if (isExpanded && searchTerm) {
      handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
    } else {
      if(error) setError(null)
      setIsExpanded(true);
      inputRef.current?.focus();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex group relative justify-end w-full"
    >
      <label htmlFor="search-input" className="sr-only">Search for products</label>
      <button
        ref={buttonRef}
        type={isExpanded && searchTerm ? "submit" : "button"}
        className="absolute top-[51%] -translate-y-[52%] -right-[4px]  h-8  w-8 cursor-pointer z-30 bg-transparent"
        aria-label="Click to search your product."
        onClick={handleButtonClick}
      >
        <SearchIcon customStyle="hover:text-violet text-black" />
      </button>
      <input
        ref={inputRef}
        className={`relative self-end text-black -mr-1 z-10 bg-transparent text-opacity-0 w-11 h-10 rounded-full cursor-pointer outline-none text-sm
                    ${
                      isExpanded
                        ? "w-full pl-4 pr-16 text-opacity-100 border-violet border"
                        : ""
                    }
                    focus:w-full focus:pl-4 focus:pr-16 focus:border-violet focus:border focus:text-opacity-100
                    transition-all ease-linear duration-200`}
        type="text"
        name="query"
        value={searchTerm}
        onChange={handleChange}
        aria-label="Search input"
      />
      {error && (
        <span
          className={`${
            isExpanded ? "absolute" : "hidden"
          } left-3 sm:left-8 md:left-6 -right-20 cursor-default overflow-visible -bottom-4 mb:-bottom-5 text-xs text-red-700 font-extralight`}
        >
          {error}
        </span>
      )}
    </form>
  );
}

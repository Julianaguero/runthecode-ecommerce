import React from "react";

type PriceInputProps = {
    id: string;
    title: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    minPrice?: number;
    maxPrice?: number;
    placeholder: string;


}

export default function PriceInput({ id, title, handleChange, minPrice, maxPrice, placeholder}: PriceInputProps) {
  return (
    <div className="flex flex-1 flex-col relative">
      <label htmlFor={id} className="text-[0.8em]">
        {title}
      </label>
      <span className="absolute bottom-[0.1rem]  text-gray-400 text-sm ">
        €
      </span>
      <input
        type="number"
        name="price"
        id={id}
        min={minPrice}
        max={maxPrice}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full text-[0.8em] border-black border-b-2 rounded-sm pl-[0.8rem] focus:bg-gray-100 focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

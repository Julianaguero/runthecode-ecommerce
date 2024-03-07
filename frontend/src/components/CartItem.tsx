import { Link } from "react-router-dom";
import { CartItemCardProps } from "../types";
import {
  calculateItemTotalPrice,
  priceToLocaleString,
} from "../utils/cartUtils";
import IconDeleteBinLine from "./Icons/IconDeleteBinLine";

export default function CartItem({
  product,
  quantity,
  handleChangeQuantity,
  removeItemFromCart,
}: CartItemCardProps) {
  const { img, name, price, _id } = product;

  return (
    <li className="flex flex-row gap-2 py-2 items-center  w-full">
      <Link to={`/product/${product._id}/${product.name.replaceAll(" ", "-")}`}  className="">
        <img src={img} alt={name} className="aspect-square object-cover px-1 max-h-[7.5rem] min-w-[120px]" />
      </Link>
      <div className="flex flex-col justify-center  ">
        <Link
          to={`/product/${product._id}/${product.name.replaceAll(" ", "-")}`}
        >
          <h4 className="text-[clamp(0.8rem,2.5vw,1.2rem)] mb-[0.20em]  md:mb-2">
            {name}
          </h4>
        </Link>
        <p className="font-semibold  md:mb-4 
        text-[clamp(0.7rem,2vw,0.9rem)] ">
          {priceToLocaleString(calculateItemTotalPrice(price, quantity))}
        </p>
        <div className="flex items-center">
          <label
            htmlFor={`cart_${_id}`}
            className="text-[clamp(0.7rem,2vw,0.95rem)]"
          >
            Qty:
          </label>
          <select
            name="qty"
            id={`cart_${_id}`} //asing select to an specific Id - using "cart_" to avoid id duplicates
            value={quantity}
            onChange={handleChangeQuantity}
            className="text-[clamp(0.7rem,1.8vw,0.95rem)] ml-2 border-0 border-b-2 py-[0.1em] pl-[0.7rem] pr-[0.5em] text-center"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button
            className=" ml-3  hover:text-red-600 text-[clamp(0.8rem,2.5vw,1.2rem)] active:scale-95"
            onClick={removeItemFromCart}
          >
            <IconDeleteBinLine />
          </button>
        </div>
      </div>
    </li>
  );
}

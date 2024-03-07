import { HiShoppingCart } from "react-icons/hi";
import {type CardButtonProps } from "../../types";
import { itemsInCart } from "../../utils/cartUtils";

export default function CartButton({ cart, onClick }: CardButtonProps) {

    return (
    <button
      aria-label="Cart"
      className="relative h-full w-full"
      onClick={onClick}
    >
      <HiShoppingCart
        className="w-6 h-6 hover:text-persimmon"
      />
      {cart.length > 0 && (
        <span className="absolute -bottom-[0.5em] -right-[0.6em] flex items-center justify-center rounded-full h-[1.6em] w-[1.6em] bg-persimmon text-white text-[0.7em] z-50">
          {itemsInCart(cart)}
        </span>
      )}
    </button>
  );
}

import { useEffect, useRef, useState } from "react";
import { CartButton, CartItemsList, LinkButtonActive } from ".";
import { useCart } from "../hooks";
import { calculateTotalPrice } from "../utils/cartUtils";

export default function Cart() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <aside ref={menuRef}>
      <CartButton cart={cart} onClick={() => setIsOpen(!isOpen)} />
      <div
        className={`${
          !isOpen ? " translate-x-full hidden" : "translate-x-0"
        } transition-all duration-300 ease-in-out origin-left bg-white absolute z-40 w-3/4 h-auto max-h-[80vh] md:w-4/12 right-0 px-3 py-3 shadow-xl overflow-y-scroll`}
      >
        {" "}
        {cart.length === 0 && (
          <p className="border-t-2 border-gray-400 py-6 my-2 w-full ">
            Your cart is empty... it's time to go shopping! 🛒
          </p>
        )}
        {cart && <CartItemsList cart={cart} />}
        <p className="mb-3 text-[clamp(0.8em,2.5vw,1em)] font-semibold">
          Subtotal: <span>{calculateTotalPrice(cart)}</span>
        </p>
        <div className="grid justify-center">
          <LinkButtonActive title="GO TO CHECKOUT" to="/cart" />
        </div>
      </div>
    </aside>
  );
}

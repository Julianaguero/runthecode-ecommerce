import { CartItem } from ".";
import { useCart } from "../hooks";
import { CartItemProps } from "../types";

export default function CartItemsList({cart} : {cart :  CartItemProps[]}) {
    const { addItemToCart, removeItemFromCart } = useCart()

    const handleChangeQuantity: React.ChangeEventHandler<HTMLSelectElement> = (
        event
      ) => {
        const productId = event.target.id.split("_").slice(-1)[0];
        //object destructuring
        const { product } = cart.filter(
          (item) => item.product._id === productId
        )[0];
        const newQuantity = parseInt(event.target.value); // converting value into number
        addItemToCart({ product, quantity: newQuantity });
      };

  return (
    <ul className="border-y-gray-400 border-y-[0.05em] divide-y divide-gray-400 mb-3 ">
    {cart.map(({ product, quantity }) => (
      <CartItem product={product} quantity={quantity} handleChangeQuantity={handleChangeQuantity} removeItemFromCart={() => removeItemFromCart({product})} key={product._id}/>
    ))}
  </ul>
  )
}

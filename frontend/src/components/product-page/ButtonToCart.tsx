import { ActionButton } from "../Buttons"
import { type ProductsProps } from "../../types"
import { useCart } from "../../hooks";

interface AddItemToCartProps {
    product: ProductsProps
}


function ButtonToCart({product} : AddItemToCartProps) {
  const { addItemToCart, cart } = useCart();

  const cartItem = cart.find((item) => item.product._id === product._id);
  const isDisabled = cartItem ? cartItem.quantity >= 3 : false;

  return (
    <>
    {product.itemsLeft > 0 ? (
        <ActionButton
          isDisabled={isDisabled}
          title={!isDisabled ? `Add to the cart` : "Max quantity reached"}
          buttonStyle={`w-3/4 md:w-1/2 py-3 ${
            isDisabled ? "bg-gray-400" : ""
          }`}
          onClick={() => addItemToCart({ product })}
        />
      ) : (
        <>
          <ActionButton
            title={`Out of stock`}
            buttonStyle={`w-1/2 py-3 `}
            isDisabled={true}
          />
        </>
      )}
    </>
  )
}

export default ButtonToCart
import { Helmet } from "react-helmet-async";
import { Breadcrumbs, CartItemsList, InnerAnimation } from "../components";
import { BreadcrumbsProps } from "../types";
import { useCart } from "../hooks";
import { calculateTotalPrice, calculateTotalShippingCost } from "../utils/cartUtils";

export default function ShoppingCart() {
  const { cart } = useCart();

  const breadcrumbPath: BreadcrumbsProps[] = [
    { name: "Continue shopping", url: "/shop" },
    { name: "", url: "" },
  ];

  return (
    <InnerAnimation>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="My shoppin cart." />
        <link rel="canonical" href="/cart" />
      </Helmet>
      <main className="max-w-[1560px] mx-auto mb-10">
        <aside>
          <Breadcrumbs breadcrumbPath={breadcrumbPath} />
        </aside>
        <div className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:flex-row px-6">
          <section className="sm:basis-4/6 sm:mr-4 ">
            <div className="bg-gray-200 py-6 px-6  ">
              <h3 className="text-xl font-semibold tracking-tighter uppercase	">
                {`YOUR CART ( ${cart.length} )`}
              </h3>
            </div>
            <div className=" py-6 px-6 ">
              {cart.length === 0 && (
                <p className="border-t-2 border-gray-400 py-6 my-2 w-full ">
                  Your cart is empty... it's time to go shopping! 🛒
                </p>
              )}
              {cart && <CartItemsList cart={cart} />}
            </div>
          </section>
          <aside className="bg-gray-900 sm:basis-2/6 text-white p-8">
            <h2 className="mb-8 text-[clamp(1rem,1.9vw,1.8rem)] tracking-tighter uppercase">
              Summary
            </h2>
            <div className="flex flex-row no-wrap justify-between items-center h-16 border-y-[0.8px] border-gray-400/70 text-[clamp(0.8rem,1.8vw,1.1rem)] font-thin tracking-tighter uppercase">
              <p>Subtotal</p>
              <span>{calculateTotalPrice(cart)}</span>
            </div>
            <div className="flex flex-row no-wrap justify-between items-center h-16  border-y-[0.8px] border-gray-400/70 text-[clamp(0.7rem,1.7vw,0.9rem)] font-thin tracking-tighter uppercase">
              <p>Estimate shipping & handling </p>
              <span>{calculateTotalShippingCost(cart)}</span>
            </div>
          </aside>
        </div>
      </main>
    </InnerAnimation>
  );
}

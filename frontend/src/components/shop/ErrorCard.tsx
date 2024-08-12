import productNotFound from "../../assets/product_not_found.png"
import { type ErrorProp } from "../../types";

interface ErrorCardProps {
  error: ErrorProp;
}

export default function ErrorCard({ error }: ErrorCardProps) {
  return (
    <section className="w-full flex flex-col justify-center items-center py-6">
      <img src={productNotFound} className="h-52 w-52" />
      <span className=" text-center mt-3 text-xl font-semibold text-blueindigo">{error}</span>
    </section>
  );
}

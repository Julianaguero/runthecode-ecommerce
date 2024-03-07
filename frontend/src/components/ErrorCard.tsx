import productNotFound from "../assets/product_not_found.png"

type ErrorCardProps = {
  error: string | null;
};

export default function ErrorCard({ error }: ErrorCardProps) {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <img src={productNotFound} className="h-52 w-52" />
      <span className=" text-center mt-3 text-xl font-semibold text-blueindigo">{error}</span>
    </section>
  );
}

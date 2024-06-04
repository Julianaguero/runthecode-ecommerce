import { BrandWrapper } from "../index"

export default function BrandsBanner() {
  return (
    <section className="max-w-[1560px] mx-auto w-full px-6 py-12 bg-yellowbright  ">
        <h2 className="text-title-h2 font-ginto-light text-center ">Our main Brands, <span className="font-ginto-nord-medium-italic">bro</span></h2>
        <BrandWrapper />
    </section>
  )
}

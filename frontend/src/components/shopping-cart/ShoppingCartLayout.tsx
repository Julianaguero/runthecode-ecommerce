import { Helmet } from "react-helmet-async";
import { InnerAnimation, Breadcrumbs } from "../index";
import { type ChildrenContext, type BreadcrumbsProps } from "../../types";

function ShoppingCartLayout({ children }: ChildrenContext) {
  const breadcrumbPath: BreadcrumbsProps[] = [
    { name: "Continue shopping", url: "/shop" },
    { name: "", url: "" },
  ];

  return (
    <InnerAnimation>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="My shoppin cart." />
        <link rel="canonical" href="https://runthecode-ecommerce.onrender.com//cart" />
      </Helmet>
      <main className="max-w-[1560px] mx-auto mb-10">
        <aside>
          <Breadcrumbs breadcrumbPath={breadcrumbPath} />
        </aside>
        {children}
      </main>
    </InnerAnimation>
  );
}

export default ShoppingCartLayout;

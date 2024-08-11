import { Helmet } from "react-helmet-async";
import { InnerAnimation, Breadcrumbs } from "../index";
import {  type BreadcrumbsProps, type ChildrenContext } from "../../types";


function ShopLayout({
  children
}: ChildrenContext) {

  const breadcrumbPath: BreadcrumbsProps[] = [
    { name: "Shop", url: "/shop" },
  ];


  return (
    <InnerAnimation>
      <Helmet>
        <title>Shop | Runthecode</title>
        <meta name="description" content="Shop our latest products now." />
        <link rel="canonical" href="/shop" />
      </Helmet>
      <main className="max-w-[1560px] mx-auto ">
        <aside>
          <Breadcrumbs breadcrumbPath={breadcrumbPath} />
        </aside>
        {children}
      </main>
    </InnerAnimation>
  );
}

export default ShopLayout;

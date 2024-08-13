import { Helmet } from "react-helmet-async";
import { InnerAnimation, Breadcrumbs } from "../index";
import { capitalizeWords } from "../../utils/generics";
import { type CollectionsLayoutProps, type BreadcrumbsProps } from "../../types";



function CollectionsLayout({
  children,
  collectionParam,
}: CollectionsLayoutProps) {
  const collectionName = collectionParam || "Loading...";

  const breadcrumbPath: BreadcrumbsProps[] = [
    { name: "Shop", url: "/shop" },
    { name: "Collections", url: "/shop" },
    { name: `${capitalizeWords(collectionName)}`, url: "/" },
  ];


  return (
    <InnerAnimation>
      <Helmet>
        <title>{capitalizeWords(collectionName)} Collection | Runthecode</title>
        <meta
          name="description"
          content="Check our latest sneakers collections now."
        />
        <link rel="canonical" href={`https://runthecode-ecommerce.onrender.com/shop/collections/${collectionName}`} />
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

export default CollectionsLayout;

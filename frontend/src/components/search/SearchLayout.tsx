import { Helmet } from "react-helmet-async";
import { InnerAnimation, Breadcrumbs } from "../index";
import { type ChildrenProp, type BreadcrumbsProps } from "../../types";

interface SearchLayoutProps {
  children: ChildrenProp,
  query: string,
}

function SearchLayout({
  children,
  query
}: SearchLayoutProps) {

  const breadcrumbPath: BreadcrumbsProps[] = [
    { name: "Shop", url: "/shop" },
  ];

  return (
    <InnerAnimation>
      <Helmet>
          <title>Shop | Runthecode.</title>
          <meta name="description" content="Shop our latest products now." />
          <link
            rel="canonical"
            href={`https://runthecode-ecommerce.onrender.com/search?q=${query}}`}
          />
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

export default SearchLayout;

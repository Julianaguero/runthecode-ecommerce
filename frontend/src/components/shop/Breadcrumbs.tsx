import { Link } from "react-router-dom";
import { HomeIcon, RightArrowIcon } from "../mygod/index";
import { type BreadcrumbsProps } from "../../types";
import { useRef } from "react";

export default function Breadcrumbs({
  breadcrumbPath,
}: {
  breadcrumbPath: BreadcrumbsProps[];
}) {
  const crumbsRef = useRef<BreadcrumbsProps[] | []>(breadcrumbPath);
  const breadcrumbs = crumbsRef?.current;

  return (
    <section className="my-4 mx-auto max-w-[1560px] px-6 py-2">
      <ol className="container flex space-x-1 md:space-x-2 items-center flex-wrap">
        <li>
          <Link
            to="/"
            className="text-[1em] text-gray-800/80 hover:text-yellowbright"
            aria-label="Home"
          >
            <HomeIcon />
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem
            key={breadcrumb.name}
            breadcrumb={breadcrumb}
            isLast={index === breadcrumbs.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}

type BreadcrumbItemProps = {
  breadcrumb: BreadcrumbsProps;
  isLast: boolean;
};

function BreadcrumbItem({ breadcrumb, isLast }: BreadcrumbItemProps) {
  return (
    <li className="flex items-center space-x-1 ">
      <i aria-hidden className="text-[1.2em]  text-gray-800/80">
        <RightArrowIcon />
      </i>
      {isLast ? (
        <span className="text-[0.9em] text-gray-500 font-sans">
          {breadcrumb.name}
        </span>
      ) : (
        <Link
          to={breadcrumb.url}
          className="text-[0.9em] text-gray-800/80 font-sans hover:text-yellowbright"
        >
          {breadcrumb.name}
        </Link>
      )}
    </li>
  );
}

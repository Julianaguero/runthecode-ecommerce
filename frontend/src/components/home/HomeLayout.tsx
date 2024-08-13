import { Helmet } from "react-helmet-async";
import { InnerAnimation } from "../layout";
import { type ChildrenContext } from "../../types";

function HomeLayout({children} : ChildrenContext) {
  return (
    <InnerAnimation>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="We are a premium sneaker store. Here you can find the trendiest shoes"
        />
        <link rel="canonical" href="https://runthecode-ecommerce.onrender.com/home" />
      </Helmet>
      {children}
    </InnerAnimation>
  );
}

export default HomeLayout;

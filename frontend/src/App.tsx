import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  ProductPage,
  Search,
  Profile,
  UserSignIn,
  UserSignUp,
  Collections,
} from "./pages/index";
import { AnimatePresence } from "framer-motion";
import { Header, Footer, ProtectedRoute } from "./components";
import { links } from "./utils/data";

function App() {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 600);
  }, [location]);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {links.map((link) => (
            <Route key={link.name} path={link.path} element={link.element}>
              {link.name}
            </Route>
          ))}
          <Route path="product/:id/:name" element={<ProductPage />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route
            path="shop/collections/:collection"
            element={<Collections />}
          />
          <Route path="search" element={<Search />} />
          <Route path="user/signin" element={<UserSignIn />} />
          <Route path="user/signup" element={<UserSignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="user/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;

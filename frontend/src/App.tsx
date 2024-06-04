import { Routes, Route, useLocation } from "react-router-dom";
import CartProvider from "./context/CartContext";
import { ShoppingCart, ProductPage, Search } from "./pages/index";
import { AnimatePresence } from "framer-motion";
import { links } from "./utils/data";
import { Header, Footer } from "./components";


function App() {
  const location = useLocation()
  
  return (
    <CartProvider>
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
          <Route path="search" element={<Search />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </CartProvider>
  );
}

export default App;

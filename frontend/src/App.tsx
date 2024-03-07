import { Routes, Route, useLocation } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Header from "./components/Header";
import { ShoppingCart, ProductPage, Search } from "./pages/index";
import { AnimatePresence } from "framer-motion";
import { links } from "./utils/data";


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
       
    </CartProvider>
  );
}

export default App;

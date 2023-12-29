import { Routes, Route, useLocation } from "react-router-dom";
import { ProductPage } from "./pages/index";
import Header from "./components/Header";
import { links } from "./lib/data";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation()
  
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
        </Routes>
      </AnimatePresence>
       
    </>
  );
}

export default App;

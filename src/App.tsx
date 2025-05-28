import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
ToastContainer

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutusPage from "./pages/AboutusPage/AboutusPage";
import ContactusPage from "./pages/ContactusPage/ContactusPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";


import { CartContext } from "./Context/CartContext";
import { CartCountContext } from "./Context/CartCountContext";
import { ToastContainer } from "react-toastify";


function App() {

  const [cart, setCart] = useState<any[]>([]);
  const [cartCount, setCartcount] = useState<number>(0);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <CartCountContext.Provider value={{ cartCount, setCartcount }}>
        <BrowserRouter>
          <div className="App">
            <ToastContainer />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections" element={<CollectionPage />} />
              <Route path="/product/:product_id" element={<ProductPage />} />
              <Route path="/about" element={<AboutusPage />} />
              <Route path="/contactus" element={<ContactusPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </CartCountContext.Provider>
    </CartContext.Provider>
  );
}

export default App;

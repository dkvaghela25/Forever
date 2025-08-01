import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutusPage from "./pages/AboutusPage/AboutusPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CartPage from "./pages/CartPage/CartPage";
import DeliveryInformation from "./pages/DeliveryInformation/DeliveryInformation";
import MyOrders from "./pages/MyOrders/MyOrders";


import { CartContext } from "./Context/CartContext";
import { CartCountContext } from "./Context/CartCountContext";
import { OrdersContext } from "./Context/OrdersContext";
OrdersContext

function App() {

  const [cart, setCart] = useState<any[]>([]);
  const [cartCount, setCartcount] = useState<number>(0);
  const [Orders, setOrders] = useState<any[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <CartCountContext.Provider value={{ cartCount, setCartcount }}>
        <OrdersContext.Provider value={{ Orders, setOrders }}>
          <BrowserRouter>
            <div className="App">
              <ToastContainer />
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/collections" element={<CollectionPage />} />
                <Route path="/product/:product_id" element={<ProductPage />} />
                <Route path="/about" element={<AboutusPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/delivery-info" element={<DeliveryInformation />} />
                <Route path="/my-orders" element={<MyOrders />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </OrdersContext.Provider>
      </CartCountContext.Provider>
    </CartContext.Provider>
  );
}

export default App;

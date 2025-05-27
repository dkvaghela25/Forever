import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/product/:product_id" element={<ProductPage />} />
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Products/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import SingleItem from "./components/SingleItem/SingleItem.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/:id" element={<SingleItem/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

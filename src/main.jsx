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
// import Products from "./components/rtk/products.jsx";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { productApi } from "./store/apiSlice.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ApiProvider api={productApi}> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/:id" element={<SingleItem />} />
          {/* <Route path="/rtk" element={<Products />} /> */}
        </Routes>
        {/* <Products /> */}
      </BrowserRouter>
      {/* </ApiProvider> */}
    </Provider>
  </StrictMode>
);

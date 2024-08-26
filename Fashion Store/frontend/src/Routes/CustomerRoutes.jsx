import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage";
import Cart from "../customer/components/Cart";
import Navigation from "../customer/components/Navigation";
import ProductDetails from "../customer/components/ProductDetails";
import Product from "../customer/components/Product";
import Checkout from "../customer/components/Checkout";
import Order from "../customer/components/Order";
import OrderDetails from "../customer/components/OrderDetails";
import Footer from "../customer/components/Footer";
const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;

import "./App.css";
import Navigation from "./customer/components/Navigation";
import HomePage from "./customer/Pages/HomePage.jsx";
import Footer from "./customer/components/Footer";
import ProductDetails from "./customer/components/ProductDetails";
import Product from "./customer/components/Product";
import Cart from "./customer/components/Cart";
import Checkout from "./customer/components/Checkout";
import Order from "./customer/components/Order";
import OrderDetails from "./customer/components/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes.jsx";
import DeliveryAddressForm from "./customer/components/DeliveryAddressForm.jsx";
import OrderSummary from "./customer/components/OrderSummary.jsx";
import OrderTracker from "./customer/components/OrderTracker.jsx";
import Admin from "./Admin/Admin.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;

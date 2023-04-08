import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Productform from "./pages/Productform";
import Categoryform from "./pages/Categoryform";
import Store from "./pages/Store";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/productform" element={<Productform />} />
          <Route path="/categoryform" element={<Categoryform />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;

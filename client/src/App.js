import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Productform from "./pages/Productform";
import Categoryform from "./pages/Categoryform";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="productform" element={<Productform />} />
        <Route path="categoryform" element={<Categoryform />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "#039999" }}>PRODUCTS</h1>
      <Products />
    </div>
  );
};

export default ProductPage;

import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import styled from "styled-components";

const Button = styled.button`
  width: 20%;
  height: 45px;
  background-color: #039999;
  margin: 10px;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 20px;
  align-items: right;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Products />
      <div>
        <Button>All Products</Button>
      </div>
    </div>
  );
};

export default Home;

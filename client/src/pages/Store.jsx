import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import CategoryCRUD from "../components/CategoryCRUD";
import ProductCRUD from "../components/ProductCRUD";

const Button1 = styled.button`
  border: none;
  height: 40px;
  width: 200px;
  font-size: 22px;
  font-weight: bolder;
  color: white;
  background-color: #039999;
`;
const Button2 = styled.button`
  border: none;
  height: 40px;
  width: 200px;
  font-size: 22px;
  font-weight: bolder;
  color: white;
  background-color: #039999;
`;
const Wrapper = styled.div``;

const Store = () => {
  const [showData, setShowData] = useState("Categories");
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleClick = (type) => {
    setShowData(type);
    if (showData === "Categories") {
      ref1.current.style.backgroundColor = "#039999";
      ref2.current.style.backgroundColor = "grey";
    } else {
      ref1.current.style.backgroundColor = "grey";
      ref2.current.style.backgroundColor = "#039999";
    }
  };

  return (
    <div>
      <Navbar />
      <Wrapper>
        <Button1
          onClick={() => {
            handleClick("Categories");
          }}
          ref={ref1}
        >
          CATEGORIES
        </Button1>
        &nbsp;
        <Button2
          onClick={() => {
            handleClick("Products");
          }}
          ref={ref2}
        >
          PRODUCTS
        </Button2>
      </Wrapper>
      {showData === "Categories" ? <CategoryCRUD /> : <ProductCRUD />}
    </div>
  );
};

export default Store;

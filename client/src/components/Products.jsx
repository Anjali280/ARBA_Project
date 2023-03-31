import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const url = await fetch("http://localhost:4000/api/products/all");
    const res = await url.json();
    setProducts(res.payload);
  };
  useEffect(() => {
    fetchProduct();
  });
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;

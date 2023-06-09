import styled from "styled-components";
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
    const token = JSON.parse(localStorage.getItem("token"));
    const url = await fetch("http://localhost:4000/api/products/all", {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
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

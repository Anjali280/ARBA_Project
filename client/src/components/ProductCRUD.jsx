import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  border: none;
  height: 40px;
  width: 200px;
  font-size: 22px;
  font-weight: bolder;
  color: white;
  background-color: #039999;
  margin-top: 20px;
`;

const ProductCRUD = () => {
  const [getData, setGetData] = useState([]);
  const getDataFun = async () => {
    const url = await fetch("http://localhost:4000/api/products/all");
    const data = await url.json();
    console.log(data.payload);
    setGetData(data.payload);
  };

  useEffect(() => {
    getDataFun();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/productform");
        }}
      >
        ADD
      </Button>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((element) => {
            return (
              <tr key={element._id}>
                <td>{element.category.name}</td>
                <td>{element.description}</td>
                <td>{element.image}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCRUD;

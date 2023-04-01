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

const Container = styled.div`
  margin-left: 350px;
  margin-top: 40px;
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
      <Container>
        <table style={{ border: "1px solid black" }}>
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
                <tr key={element._id} style={{ border: "1px solid black" }}>
                  <td>{element.title}</td>
                  <td>{element.description}</td>
                  <td>
                    {" "}
                    <img
                      alt={element.title}
                      src={element.image}
                      height="200px"
                      width="200px"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default ProductCRUD;

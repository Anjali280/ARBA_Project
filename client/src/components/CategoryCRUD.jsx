import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

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

const Container1 = styled.div`
  margin-left: 600px;
  margin-top: 40px;
`;

const CategoryCRUD = () => {
  const [getData, setGetData] = useState([]);

  const getDataFun = async () => {
    const url = await fetch("http://localhost:4000/api/categories");
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
          navigate("/categoryform");
        }}
      >
        ADD
      </Button>
      <Container1>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>SLUG</th>
              <th>OWNER</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((element) => {
              return (
                <tr key={element._id}>
                  <td>{element.name}</td>
                  <td>{element.slug}</td>
                  <td>{element.owner.userName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container1>
    </div>
  );
};

export default CategoryCRUD;
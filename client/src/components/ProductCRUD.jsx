import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Button = styled.button`
  border: none;
  height: 30px;
  width: 120px;
  font-size: 15px;
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
    const token = JSON.parse(localStorage.getItem("token"));
    const url = await fetch("http://localhost:4000/api/products/all", {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = await url.json();
    console.log(data.payload);
    setGetData(data.payload);
    console.log(getData);
  };

  useEffect(() => {
    getDataFun();
  }, []);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const url = await fetch(`http://localhost:4000/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const response = await url.json();
    console.log(response);
    alert(response.message);
  };
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/productform");
        }}
      >
        ADD
      </Button>
      &nbsp;
      <Button
        onClick={() => {
          window.location.reload();
        }}
      >
        REFRESH
      </Button>
      <Container>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>IMAGE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((element) => {
              return (
                <tr key={element._id} style={{ border: "1px solid black" }}>
                  <td>{element.title}</td>
                  <td>{element.description}</td>
                  <td>
                    <img
                      alt={element.title}
                      src={element.image}
                      height="200px"
                      width="200px"
                    />
                  </td>
                  <td>
                    <Link>EDIT</Link>
                    <span>/</span>
                    <button
                      onClick={() => {
                        handleDelete(element._id);
                      }}
                    >
                      DELETE
                    </button>
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

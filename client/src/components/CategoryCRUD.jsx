import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

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

const Container1 = styled.div`
  margin-left: 600px;
  margin-top: 40px;
`;

const CategoryCRUD = () => {
  const [getData, setGetData] = useState([]);

  const getDataFun = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const url = await fetch("http://localhost:4000/api/categories/all", {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = await url.json();
    console.log(data.payload);
    setGetData(data.payload);
  };

  useEffect(() => {
    getDataFun();
  }, []);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const url = await fetch(`http://localhost:4000/api/categories/${id}`, {
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
          navigate("/categoryform", { state: { type: "Add new Category" } });
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
      <Container1>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>SLUG</th>
              <th>OWNER</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((element) => {
              return (
                <tr key={element._id}>
                  <td>{element.name}</td>
                  <td>{element.slug}</td>
                  <td>{element.owner.userName}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate("/categoryform", {
                          state: { type: "Edit Category", id: element._id },
                        });
                      }}
                    >
                      EDIT
                    </button>
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
      </Container1>
    </div>
  );
};

export default CategoryCRUD;

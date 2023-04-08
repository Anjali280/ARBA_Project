import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  margin-left: 450px;
`;

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
  border-radius: 5px;
`;

const CartPage = () => {
  const navigate = useNavigate();
  const data = useCart();
  const dispatch = useDispatchCart();
  return (
    <div>
      <Navbar />
      {data.length === 0 ? (
        <div>
          <div style={{ fontSize: "30px", color: "red" }}>
            NO ITEMS IN THE CART
          </div>
          <br></br>
          <Button
            onClick={() => {
              navigate("/Products");
            }}
          >
            Continue Shopping !!!!
          </Button>
        </div>
      ) : (
        <Container>
          <table>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element, index) => {
                return (
                  <tr key={index} style={{ border: "1px solid black" }}>
                    <td>
                      <img
                        alt={element.title}
                        src={element.image}
                        height="200px"
                        width="200px"
                      />
                    </td>
                    <td>{element.title}</td>
                    <td>Rs.{element.price}</td>
                    <td>
                      <button
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
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
      )}
    </div>
  );
};

export default CartPage;

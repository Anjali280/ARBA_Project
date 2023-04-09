import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 10px;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: none;

  border-bottom: 2px solid #00acac;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px 20px;
  background-color: #00acac;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 15px;
`;

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    OldPassword: "",
    NewPassword: "",
    ConfirmPassword: "",
  });
  const { OldPassword, NewPassword, ConfirmPassword } = formFields;

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const handlePassword = async (event) => {
    const token = JSON.parse(localStorage.getItem("token"));
    event.preventDefault();
    const url = await fetch("http://localhost:4000/api/", {
      method: "POST",
      body: JSON.stringify({
        OldPassword,
        NewPassword,
        ConfirmPassword,
      }),
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const res = await url.json();
    console.log(res);

    if (res.type === "failure") {
      alert(res.message);
    } else {
      alert(res.message);
      navigate("/profilePage");
    }
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Form>
            <Input
              placeholder="Old Password"
              name="OldPassword"
              type="password"
              value={OldPassword}
              onChange={handleChange}
            />

            <Input
              placeholder="New Password"
              name="NewPassword"
              type="password"
              value={NewPassword}
              onChange={handleChange}
            />
            <Input
              placeholder="Confirm Password"
              name="ConfirmPassword"
              type="password"
              value={ConfirmPassword}
              onChange={handleChange}
            />

            <Button onClick={handlePassword}>Change Password</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ChangePassword;

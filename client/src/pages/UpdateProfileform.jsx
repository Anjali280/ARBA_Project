import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  padding: 20px;
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

const UpdateProfileform = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    newAvatar: "",
    newFullname: "",
  });
  const { newAvatar, newFullname } = formFields;

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const handleProfile = async (event) => {
    const token = JSON.parse(localStorage.getItem("token"));
    event.preventDefault();
    const url = await fetch("http://localhost:4000/api/", {
      method: "POST",
      body: JSON.stringify({
        newAvatar,
        newFullname,
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
              placeholder="Add new Avatar"
              name="newAvatar"
              type="url"
              value={newAvatar}
              onChange={handleChange}
            />

            <Input
              placeholder="New Full Name"
              name="newFullname"
              type="text"
              value={newFullname}
              onChange={handleChange}
            />

            <Button onClick={handleProfile}>Update Profile</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UpdateProfileform;

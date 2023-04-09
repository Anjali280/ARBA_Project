import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Image = styled.img``;
const Details = styled.div``;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 10px 20px;
  background-color: #00acac;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 15px;
`;

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    //event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const url = await fetch("http://localhost:4000/api/auth/loggedInUser", {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const res = await url.json();
    setUser(res.payload);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
        <Image src={user.avatar} alt="cat" width="400px" height="300px" />
        <Details>{user.userName}</Details>
        <Details>{user.fullName}</Details>
        <Details>{user.email}</Details>
        <Button
          onClick={() => {
            navigate("/updateProfile");
          }}
        >
          Update Profile
        </Button>
        <hr />
        <div>
          <Button
            onClick={() => {
              navigate("");
            }}
          >
            Terms & Condition
          </Button>{" "}
          <span></span>
          <Button
            onClick={() => {
              navigate("/changePassword");
            }}
          >
            Change Password
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;

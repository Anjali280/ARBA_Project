import React from "react";
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
  return (
    <div>
      <Navbar />
      <Container>
        <Image
          src="https://www.eluniversal.com.mx/resizer/px-FslTn65k8NzLVUrb5bHS-noI=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/ZVC7SKHTZZE3THXCC5SWRNAD4E.jpg"
          alt="cat"
          width="400px"
          height="300px"
        />
        <Details>User Name</Details>
        <Details>Full Name</Details>
        <Details>cat@gmail.com</Details>
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

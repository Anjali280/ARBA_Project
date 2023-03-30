import React from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  color: white;
  background-color: #039999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Urbanist", sans-serif;
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
  font-family: "Audiowide", sans-serif;
`;
const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
`;

const Right = styled.div`
  flex: 3;
  font-family: "Urbanist", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin-left: 35px;
  margin-right: 20px;
`;

const Select = styled.select`
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>LOGO.</Logo>
        </Left>
        <Center></Center>
        <Right>
          <Link to="/cart">
            <MenuItems>
              <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItems>
          </Link>
          <Select name="profile">
            <option value="">My Store</option>
            <option value="Profile">Profile</option>
            <option value="Logout">Logout</option>
          </Select>
        </Right>
      </Wrapper>
    </Container>
  );
}

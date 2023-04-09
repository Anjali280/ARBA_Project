import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const Circle = styled.div``;

const Circle2 = styled.div`
  width: 50px;
  height: 50px;
  background-color: #00acac;
  color: #00acac;
  border-radius: 25px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Desc = styled.div``;

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

const Linktag = styled.div`
  margin: 5px 0px;
  font-size: 14px;
  cursor: pointer;
`;

const Register = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confpassword: "",
    avatar: "",
  });
  const { username, fullname, email, password, confpassword, avatar } =
    formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const navigate = useNavigate();
  const registerUser = async (event) => {
    event.preventDefault();
    if (password !== confpassword) {
      alert("new and confirm password do not match");
      return;
    }
    const url = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        fullName: fullname,
        userName: username,
        email,
        password,
        avatar,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await url.json();
    console.log(res);
    alert(res.message);
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Circle>
          <Circle2>Logo</Circle2>
        </Circle>
        <Title>APP NAME</Title>
        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Desc>
        <Form>
          <Input
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <Input
            placeholder="Fullname"
            name="fullname"
            value={fullname}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            name="confpassword"
            value={confpassword}
            onChange={handleChange}
          />
          <Input
            placeholder="Enter avatar URL"
            type="url"
            name="avatar"
            value={avatar}
            onChange={handleChange}
          />
          <Button onClick={registerUser}>Register</Button>

          <Linktag>
            Already have an account ?<Link to="/"> Login</Link>
          </Linktag>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

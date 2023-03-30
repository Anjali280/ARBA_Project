import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
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
  padding: 15px 20px;
  background-color: #00acac;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Linktag = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Circle>LOGO</Circle>
        <Title>APP NAME</Title>
        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Desc>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" type="password" />
          <Button>LOGIN</Button>

          <Linktag>
            Don't have an account?<Linktag> Sign up</Linktag>
          </Linktag>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

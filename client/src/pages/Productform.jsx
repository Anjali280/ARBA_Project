import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const Productform = () => {
  const [formFields, setFormFields] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });
  const { title, description, price, image, category } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let fetchURL = "";
    let methodType = "";
    if (location.state.type === "Add new Product") {
      fetchURL = "http://localhost:4000/api/products";
      methodType = "POST";
    } else {
      fetchURL = `http://localhost:4000/api/products/${location.state.id}`;
      methodType = "PATCH";
    }
    const token = JSON.parse(localStorage.getItem("token"));
    const url = await fetch(fetchURL, {
      method: methodType,
      body: JSON.stringify({
        title,
        description,
        price,
        image,
        category,
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
      navigate("/products");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Circle>
          <Circle2>Logo</Circle2>
        </Circle>
        <Title>APP NAME</Title>
        <Form>
          <Input
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
          <Input
            placeholder="Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <Input
            placeholder="Price"
            name="price"
            value={price}
            onChange={handleChange}
          />
          <Input
            placeholder="Image"
            name="image"
            type="url"
            value={image}
            onChange={handleChange}
          />
          <Input
            placeholder="Category"
            name="category"
            type="text"
            value={category}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>{location.state.type}</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Productform;

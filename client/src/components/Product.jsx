import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  margin-bottom: 120px;
`;

const Info = styled.div`
  margin-top: 320px;
  width: 80%;
  height: 50%;
  position: absolute;
  background-color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const Image = styled.img`
  height: 100%;
`;

const Icon = styled.div`
  width: 90%;
  height: 30px;
  background-color: white;
  margin: 10px;
  font-weight: 700;
`;
const Desc = styled.div`
  width: 90%;
  height: 40px;
  background-color: white;
  margin: 10px;
  overflow: hidden;
  font-size: 15px;
`;
const Amount = styled.div`
  width: 90%;
  height: 30px;
  color: #039999;
  font-weight: 700;
  margin: 10px;
`;

const Button = styled.button`
  width: 90%;
  height: 30px;
  background-color: #039999;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: none;
  color: white;
  font-weight: 500;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Icon>{item.title}</Icon>
        <Desc>{item.description}</Desc>
        <Amount>Rs {item.price}</Amount>
        <Button>Add to Cart</Button>
      </Info>
    </Container>
  );
};

export default Product;

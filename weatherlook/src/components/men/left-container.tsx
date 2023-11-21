import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
  border: 4px solid black;
  padding: 7px 50px;
  text-transform: uppercase;
`;

const Category = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  &:after {
    content: "";
    display: block;
    width: 50%;
    border-bottom: 1px solid black;
    margin-top: 20px;
    transform: translateX(50%);
  }
`;

const Price = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  &:after {
    content: "";
    display: block;
    width: 50%;
    border-bottom: 1px solid black;
    margin-top: 20px;
    transform: translateX(50%);
  }
`;

const Color = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const MenuTitle = styled.h2`
  font-size: 25px;
  text-align: center;
`;

const CategoryItem = styled.li`
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

const PriceList = styled.li`
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
`;

const ColorContainer = styled.div``;

export default function MenLeftContainer() {
  return (
    <Wrapper>
      <Title>Men</Title>
      <Category>
        <MenuTitle>Category</MenuTitle>
        <CategoryItem>T-Shirts & Tops</CategoryItem>
        <CategoryItem>Outerwear</CategoryItem>
        <CategoryItem>Pants</CategoryItem>
        <CategoryItem>Shoes</CategoryItem>
        <CategoryItem>Bags</CategoryItem>
      </Category>
      <Price>
        <MenuTitle>Price</MenuTitle>
        <PriceList>$0~$50</PriceList>
        <PriceList>$50~$100</PriceList>
        <PriceList>$100~$150</PriceList>
        <PriceList>$150~$200</PriceList>
        <PriceList>$200+</PriceList>
      </Price>
      <Color>
        <MenuTitle>Color</MenuTitle>
        <ColorContainer></ColorContainer>
      </Color>
    </Wrapper>
  );
}

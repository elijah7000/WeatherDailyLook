import styled from "styled-components";
import { clothArray } from "../../../data/best-seller-item";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px;
`;

const Gender = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
  margin-top: 10px;
`;

const GenderList = styled.button`
  font-size: 20px;
  margin-right: 10px;
  border-radius: 40px;
  padding: 5px 20px;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    background-color: #dfe6e9;
  }
`;

const Title = styled.h1`
  font-size: 60px;
`;

const ClothList = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(3, 450px);
  gap: 10px;
`;

const Cloth = styled.li`
  width: 100%;
  border-radius: 1%;
  display: flex;
  justify-content: flex-start;
  background-image: url("https://cdn.cliqueinc.com/posts/244073/model-outfits-244073-1512582997926-image.700x0c.jpg");
  background-size: cover;
`;

const MoreCloth = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const MoreClothBtn = styled.button`
  padding: 10px 30px;
  border-radius: 10px;
  background-color: inherit;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #dfe6e9;
  }
`;

export default function BestSellerItem() {
  return (
    <Wrapper>
      <Header>
        <Title>Top Sellers</Title>
        <Gender>
          <GenderList>All</GenderList>
          <GenderList>Men</GenderList>
          <GenderList>Women</GenderList>
        </Gender>
      </Header>
      <ClothList>
        {clothArray.map((item) => (
          <Cloth>{item}</Cloth>
        ))}
      </ClothList>
      <MoreCloth>
        <MoreClothBtn>View More Top Seller</MoreClothBtn>
      </MoreCloth>
    </Wrapper>
  );
}

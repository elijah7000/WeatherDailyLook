import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffe6d8;
`;

const Title = styled.h1`
  font-size: 60px;
  padding: 40px;
`;

const ClothList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
`;

const Cloth = styled.div`
  width: 100%;
  background-color: red;
`;

export default function BestSellerItem() {
  const [cloth, setCloth] = useState(1);
  return (
    <Wrapper>
      <Title>Top Sellers</Title>
      <ClothList></ClothList>
    </Wrapper>
  );
}

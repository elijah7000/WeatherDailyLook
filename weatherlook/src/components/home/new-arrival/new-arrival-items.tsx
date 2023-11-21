import styled from "styled-components";
import { newArrival } from "../../../data/new-arrival-item";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 40% 60%;
  margin-top: 40px;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 20px;
  border: 3px solid black;
  background-color: inherit;
  padding: 5px 30px;
`;

const ModelContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  position: relative;
`;

const FirstModel = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://image.msscdn.net/global/images/2023/11/13/c093c0f05e214af4ab1222a54465569c.jpeg");
  background-position: center;
  background-size: cover;
`;

const SecondModel = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://image.msscdn.net/images/goods_img/20230925/3591937/3591937_16957086072026_500.jpg");
  background-position: center;
  background-size: cover;
`;

const ShopNow = styled.button`
  position: absolute;
  font-size: 30px;
  color: white;
  bottom: 10%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  text-transform: uppercase;
  background-color: #e17055;
  border: none;
  cursor: pointer;
`;

const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #bea6a0;
`;

const ClothList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 50px;
  gap: 10px;
`;

const Cloth = styled.div`
  background-image: url("https://cdn.cliqueinc.com/posts/244073/model-outfits-244073-1512582997926-image.700x0c.jpg");
  background-size: cover;
`;

export default function NewArrival() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>New Arrival</Title>
        <ModelContainer>
          <FirstModel></FirstModel>
          <SecondModel></SecondModel>
          <ShopNow>Shop Now</ShopNow>
        </ModelContainer>
      </LeftWrapper>
      <RightWrapper>
        <ClothList>
          {newArrival.map((item) => (
            <Cloth>{item}</Cloth>
          ))}
        </ClothList>
      </RightWrapper>
    </Wrapper>
  );
}

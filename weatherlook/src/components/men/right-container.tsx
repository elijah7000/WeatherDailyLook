import styled from "styled-components";
import { saleCloth } from "../../data/sale-cloth";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;
`;

const Total = styled.span`
  font-size: 15px;
  color: #b2bec3;
  opacity: 0.7;
  margin-left: 50px;
`;

const SelectOption = styled.select`
  border: none;
  margin-right: 5px;
  background-color: inherit;
  font-size: 15px;
  color: #b2bec3;
  opacity: 0.7;
`;

const OptionList = styled.option``;

const MiddleContainer = styled.div`
  height: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 10px;
`;

const ClothList = styled.div`
  background-color: black;
`;

const BottomContainer = styled.div`
  height: 5%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MenRightContainer() {
  return (
    <Wrapper>
      <TopContainer>
        <Total>Total: 1000</Total>
        {/* 유저가 선택한 옵션에 따라서 아이탬들이 정렬  */}
        <SelectOption>
          <OptionList>Most Popular</OptionList>
          <OptionList>Newest First</OptionList>
          <OptionList>Price low to high</OptionList>
          <OptionList>Price high to low</OptionList>
        </SelectOption>
      </TopContainer>
      <MiddleContainer>
        {saleCloth.map((items) => (
          <ClothList>{items}</ClothList>
        ))}
      </MiddleContainer>
      <BottomContainer>
        <MdKeyboardArrowLeft size="50" />
        <MdKeyboardArrowRight size="50" />
      </BottomContainer>
    </Wrapper>
  );
}

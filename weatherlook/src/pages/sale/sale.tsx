import styled from "styled-components";
import LeftContainer from "../../components/sale/left-container";
import RightContainer from "../../components/sale/right-container";
import SaleBanner from "../../components/sale/banner";

const Wrapper = styled.div`
  height: 200vh;
  width: 100%;
  padding-top: 150px;
  margin-bottom: 400px;
`;

const TopColumn = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomColumn = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
`;

export default function Sale() {
  return (
    <Wrapper>
      <TopColumn>
        <SaleBanner />
      </TopColumn>
      <BottomColumn>
        <LeftContainer />
        <RightContainer />
      </BottomColumn>
    </Wrapper>
  );
}

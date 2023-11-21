import styled from "styled-components";
import LeftContainer from "../../components/men/left-container";
import RightContainer from "../../components/men/right-container";

const Wrapper = styled.div`
  height: 200vh;
  width: 100%;
  padding-top: 150px;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
`;

export default function Sale() {
  return (
    <Wrapper>
      <LeftContainer />
      <RightContainer />
    </Wrapper>
  );
}

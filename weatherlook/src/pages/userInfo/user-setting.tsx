import styled from "styled-components";
import LeftColumn from "../../components/userInfo/left-column";
import RightColumn from "../../components/userInfo/right-column";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 150px;
  display: grid;
  grid-template-columns: 0.8fr 2fr;
`;

export default function UserInfo() {
  return (
    <Wrapper>
      <LeftColumn />
      <RightColumn />
    </Wrapper>
  );
}

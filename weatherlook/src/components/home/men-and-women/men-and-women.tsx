import { url } from "inspector";
import styled from "styled-components";
import img from "../../../assets/men.jpg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 95%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-areas:
    "a b c"
    "a b c"
    " a d c";
  gap: 15px;
  grid-template-columns: 35% 35%;
`;

const Men = styled.div`
  grid-area: a;
  background-color: tomato;
  border-radius: 15px;
  margin-left: 10px;
  background-image: url("https://images.unsplash.com/photo-1534447536372-79d8f8974c5c?auto=format&fit=crop&q=80&w=3456&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Trend = styled.div`
  grid-area: b;
  background-color: yellow;
  border-radius: 15px;
  background-image: url("https://images.unsplash.com/photo-1605859465655-84c45e14a0af?auto=format&fit=crop&q=80&w=3500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CouponAndNews = styled.div`
  grid-area: d;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DiscountCode = styled.span`
  color: white;
  font-size: 30px;
`;

const Women = styled.div`
  grid-area: c;
  background-color: blue;
  border-radius: 15px;
  margin-right: 10px;
  background-image: url("https://images.unsplash.com/photo-1632577743431-2b2d91e5dc8a?auto=format&fit=crop&q=80&w=3469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.h2`
  color: white;
  font-size: 35px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export default function MenAndWomen() {
  return (
    <Wrapper>
      <Container>
        <Men>
          <Link to="/men">
            <Title>Men's Clothing</Title>
          </Link>
        </Men>
        <Trend>
          <Title>Trend</Title>
        </Trend>
        <CouponAndNews>
          <DiscountCode>CLAIM 30% DISCOUNT CODE</DiscountCode>
        </CouponAndNews>
        <Women>
          <Title>Women's Clothing</Title>
        </Women>
      </Container>
    </Wrapper>
  );
}

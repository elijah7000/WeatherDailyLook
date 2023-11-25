import styled from "styled-components";

const TopColumn = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContainer = styled.div`
  width: 80%;
  height: 100%;
  background: #ff7e5f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #feb47b,
    #ff7e5f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #feb47b,
    #ff7e5f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const Banner = styled.span`
  font-size: 50px;
  width: 40%;
  text-align: center;
  font-family: "Vina Sans", sans-serif;
  margin-bottom: 15px;
`;

const PromoCode = styled.span`
  font-size: 30px;
  opacity: 0.7;
  color: #636e72;
  margin-bottom: 15px;
`;

const Code = styled.span`
  color: black;
`;

const Membership = styled.button`
  background-color: black;
  border: none;
  color: whitesmoke;
  padding: 10px 15px;
  font-size: 30px;
  border-radius: 10px;
`;

const BottomColumn = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
`;

export default function WomenBanner() {
  return (
    <BannerContainer>
      <Banner>Discounts up to 50% from subscribe and claim promo code </Banner>
      <PromoCode>
        promocode: <Code>hehexd</Code>
      </PromoCode>
      <Membership>Subscribe now</Membership>
    </BannerContainer>
  );
}

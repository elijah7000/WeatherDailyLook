import styled from "styled-components";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa6";

const Wrapper = styled.div`
  width: 100%;

  padding: 50px;
  background-color: #e5e5e4;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  width: 50%;
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const FooterListTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const FooterListItemContainer = styled.li`
  margin-top: 10px;
`;

const FooterListItem = styled.div`
  margin-top: 15px;
  opacity: 0.6;
`;

const SnsIcon = styled.div`
  margin-top: 35px;
  font-size: 30px;
  width: 15%;
  display: flex;
  justify-content: space-evenly;
`;

const Description = styled.p`
  margin-top: 20px;
  width: 29%;
`;

const Logo = styled.h3`
  margin-top: 35px;
  font-size: 35px;
  font-family: "Dancing Script", cursive;
`;

export default function Footer() {
  return (
    <Wrapper>
      <FooterListContainer>
        <FooterList>
          <FooterListTitle>Shop</FooterListTitle>
          <FooterListItemContainer>
            <FooterListItem>Sale</FooterListItem>
            <FooterListItem>Women</FooterListItem>
            <FooterListItem>Men</FooterListItem>
            <FooterListItem>New in</FooterListItem>
          </FooterListItemContainer>
        </FooterList>
        <FooterList>
          <FooterListTitle>About us</FooterListTitle>
          <FooterListItemContainer>
            <FooterListItem>WDL group</FooterListItem>
            <FooterListItem>Investor Relations</FooterListItem>
          </FooterListItemContainer>
        </FooterList>
        <FooterList>
          <FooterListTitle>Help</FooterListTitle>
          <FooterListItemContainer>
            <FooterListItem>Customer Service</FooterListItem>
            <FooterListItem>My Acocunt</FooterListItem>
            <FooterListItem>Contact</FooterListItem>
            <FooterListItem>Legal & Privacy</FooterListItem>
          </FooterListItemContainer>
        </FooterList>
      </FooterListContainer>
      <SnsIcon>
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
        <FaPinterestP />
      </SnsIcon>
      <Description>
        Discover curated fashion styles inspired by your location's unique
        weather and temperature. Elevate your wardrobe with our recommendations
        tailored to your current surroundings, ensuring you stay effortlessly
        stylish in every season
      </Description>
      <Logo>WDL</Logo>
    </Wrapper>
  );
}

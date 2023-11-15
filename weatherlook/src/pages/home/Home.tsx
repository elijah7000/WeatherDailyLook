import styled from "styled-components";
import HomeHeader from "../../layout/header/header";
import WeatherAndSlide from "../../components/home/weatherAndSlide/weather-and-slide";
import MenAndWomen from "../../components/home/men-and-women/men-and-women";
import BestSellerItem from "../../components/home/best-seller/best-seller-items";

const Wrapper = styled.div`
  width: 100%;
  height: 300vh;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Wrapper>
      <WeatherAndSlide />
      <MenAndWomen />
      <BestSellerItem />
    </Wrapper>
  );
}

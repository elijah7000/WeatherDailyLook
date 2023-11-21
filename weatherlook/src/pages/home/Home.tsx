import styled from "styled-components";
import HomeHeader from "../../layout/header/header";
import WeatherAndSlide from "../../components/home/weatherAndSlide/weather-and-slide";
import MenAndWomen from "../../components/home/men-and-women/men-and-women";
import BestSellerItem from "../../components/home/best-seller/best-seller-items";
import NewArrival from "../../components/home/new-arrival/new-arrival-items";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin-bottom: 50px;
`;

export default function Home() {
  return (
    <Wrapper>
      <WeatherAndSlide />
      <MenAndWomen />
      <BestSellerItem />
      <NewArrival />
    </Wrapper>
  );
}

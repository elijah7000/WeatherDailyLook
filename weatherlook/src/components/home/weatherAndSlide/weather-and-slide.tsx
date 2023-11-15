import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainWeather from "./main-weather";
import WeeklyWeather from "./weekly-weather";
import NewsSlide from "./news-slide";

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-areas:
    "a b "
    "c b";
  grid-template-columns: 1.6fr 2fr;
  grid-template-rows: 1.5fr 1fr;
  margin-top: 150px;
`;

const MainWeatherContainer = styled.div`
  grid-area: a;
  background-color: #e17055;
  color: black;
  display: flex;
  justify-content: center;
`;

const WeeklyWeatherContainer = styled.div`
  grid-area: c;
  background-color: #ffe6d8;
`;

const Slide = styled.div`
  grid-area: b;
`;

export default function WeatherAndSlide() {
  return (
    <Wrapper>
      <MainWeatherContainer>
        <MainWeather />
      </MainWeatherContainer>
      <WeeklyWeatherContainer>
        <WeeklyWeather />
      </WeeklyWeatherContainer>
      <Slide>
        <NewsSlide />
      </Slide>
    </Wrapper>
  );
}

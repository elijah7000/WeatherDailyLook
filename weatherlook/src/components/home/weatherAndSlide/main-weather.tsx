import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { IDailyWeather } from "../../../data/weather";

const API_KEYS = "ecf8fcdc109cf9fd31f4211a5edc67e8";

const Container = styled.div`
  display: flex;
  align-items: center;
  color: whitesmoke;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 90%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #497e91;
`;
const Title = styled.h1`
  font-size: 45px;
  margin-bottom: 5px;
`;

const Weather = styled.h2`
  font-size: 40px;
`;

const CityName = styled.h3`
  font-size: 30px;
`;

const WeatherIcon = styled.img``;

const Temperature = styled.h1`
  font-size: 45px;
`;
export default function MainWeather() {
  const [weather, setWeather] = useState<IDailyWeather | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            setError(
              "Error getting your location. Please allow location access."
            );
          }
        );
      } catch (error) {
        setError("Error getting your location.");
      }
    };

    fetchData();
  }, []);

  const fetchWeatherData = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError("Error fetching weather data.");
    }
  };
  const weatherIcon = `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`;
  return (
    <Container>
      <Wrapper>
        <Title>Today</Title>
        <CityName>{weather?.name}</CityName>
        <Weather>{weather?.weather[0].main}</Weather>
        <WeatherIcon src={weatherIcon}></WeatherIcon>
        <Temperature>{Math.floor(weather?.main.temp)}</Temperature>
      </Wrapper>
    </Container>
  );
}

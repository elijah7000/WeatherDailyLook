import { auth } from "../../FirebaseConfig";
import { useEffect, useState } from "react";

import { IDailyWeather } from "../../data/weather";
import styled from "styled-components";

const API_KEYS = "ecf8fcdc109cf9fd31f4211a5edc67e8";

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Name = styled.span`
  text-transform: uppercase;
  font-size: 30px;
`;

const CurrentLocation = styled.span`
  margin-top: 10px;
  font-size: 25px;
`;

export default function RightColumnTop() {
  const [weather, setWeather] = useState<IDailyWeather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const currentUser = auth.currentUser;
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
  return (
    <Wrapper>
      <Name>{currentUser?.displayName}</Name>
      <CurrentLocation>{weather?.name}</CurrentLocation>
    </Wrapper>
  );
}

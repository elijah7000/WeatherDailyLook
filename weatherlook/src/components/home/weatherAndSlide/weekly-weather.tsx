import { useEffect, useState } from "react";
import styled from "styled-components";
import { IWeeklyWeather } from "../../../data/weather";

const API_KEYS = "ecf8fcdc109cf9fd31f4211a5edc67e8";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: whitesmoke;
`;

const Box = styled.div`
  width: 20%;
  height: 80%;
  background-color: #5d6278;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DateWeather = styled.h2`
  font-size: 20px;
`;

const Weather = styled.h2`
  font-size: 35px;
  margin-bottom: 5px;
`;

const Temp = styled.span`
  font-size: 25px;
`;

const WeatherIcon = styled.img``;

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

export default function WeeklyWeather() {
  const [weather, setWeather] = useState<IWeeklyWeather[]>([]);
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
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`
      );
      const data = await response.json();
      const fiveDayData = data.list.filter(({ dt_txt }: any) =>
        dt_txt.endsWith("00:00:00")
      );
      setWeather(fiveDayData);
    } catch (error) {
      setError("Error fetching weather data.");
    }
  };
  return (
    <Wrapper>
      {weather
        ?.map((item) => {
          const weatherIcon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
          const weeklyDay = item.dt_txt.substring(5, 10);
          const date = new Date(weeklyDay).getDay();
          return (
            <Box>
              <DateWeather>{weeklyDay}</DateWeather>
              <Weather>{item.weather[0].main}</Weather>
              <WeatherIcon src={weatherIcon}></WeatherIcon>
              <Temp>{Math.floor(item.main.temp_min)}</Temp>
            </Box>
          );
        })
        .slice(0, 4)}
    </Wrapper>
  );
}

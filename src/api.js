import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (cityName) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

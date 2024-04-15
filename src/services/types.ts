type WeatherType = {
  main: string;
  description: string;
};

type MainType = {
  temp: number;
  pressure: number;
  humidity: number;
};

type WindType = {
  speed: number;
  deg: number;
};

export type ForecastType = {
  weather: WeatherType[];
  main: MainType;
  wind: WindType;
  name: string;
};

export type CoordType = {
  lat: number;
  lon: number;
  units?: string;
};

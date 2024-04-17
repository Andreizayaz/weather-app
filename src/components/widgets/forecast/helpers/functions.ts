import { CLEARLY_BG, NASTY_BG, clearlyWeather, nastyWeather } from "./consts";

export const changeBodyBg = (tempDesc: string) => {
  if (clearlyWeather.includes(tempDesc)) {
    document.body.style.backgroundColor = CLEARLY_BG;
    return;
  }

  if (nastyWeather.includes(tempDesc)) {
    document.body.style.backgroundColor = NASTY_BG;
    return;
  }

  document.body.style.backgroundColor = CLEARLY_BG;
};

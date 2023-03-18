import { CityWeather, getTemperatureFromOW } from "./weather-iterator";

const MY_APP_ID = "919947247447c728e0406c2abce9e8b1";

describe(".weather iterator", () => {
  test("city weather", async () => {
    const cityName = "dhaka";
    const dhakaCityWeather = new CityWeather(cityName);
    await dhakaCityWeather.checkTemperature();
    const temp = await getTemperatureFromOW(cityName);
    // expect(dhakaCityWeather.getCityWeather().temperature).toEqual(temp);
    expect(dhakaCityWeather.getCityWeather().cityName).toEqual(cityName);
  });
});

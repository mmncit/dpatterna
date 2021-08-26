import {
  CityWeather,
  CityWeatherCollection,
} from "patterns/iterator/weather-iterator";

export async function produceData() {
  const collection = new CityWeatherCollection();
  await collection.addItem(new CityWeather("dhaka"));
  await collection.addItem(new CityWeather("barisal"));
  await collection.addItem(new CityWeather("chittagong"));
  await collection.addItem(new CityWeather("khulna"));
  await collection.addItem(new CityWeather("mymensingh"));
  await collection.addItem(new CityWeather("rajshahi"));
  await collection.addItem(new CityWeather("rangpur"));
  await collection.addItem(new CityWeather("sylhet"));
  return collection.getItems();
}

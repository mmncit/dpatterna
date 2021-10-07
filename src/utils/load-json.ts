import unfetch from "unfetch";

export default async function loadJSON(url: string) {
  const fetch = unfetch;
  const response = await fetch(url);
  return response.json();
}

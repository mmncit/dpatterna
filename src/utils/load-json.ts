export default async function loadJSON(url: string) {
  const response = await fetch(url);
  return response.json();
}

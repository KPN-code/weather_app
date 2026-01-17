const BASE_URL = 'https://api.weatherapi.com/v1'; 
// API:n perusosoite

export const fetchWeather = async (city) => { 
  // Funktio hakee nykyisen sään tietylle kaupungille
  const res = await fetch(
    `${BASE_URL}/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=no`
  ); 
  // Tehdään fetch-pyyntö API:in kaupungin nimellä
  // import.meta.env.VITE_WEATHER_API_KEY hakee API-avaimen ympäristömuuttujasta

  if (!res.ok) throw new Error('City not found'); 
  // Jos API palauttaa virheen, heitetään poikkeus
  return res.json(); 
  // Palautetaan JSON-data
};

export const fetchSuggestions = async (query) => { 
  // Funktio hakee kaupunkiehdotuksia kirjoitetun tekstin perusteella
  if (!query) return []; 
  // Jos teksti tyhjä, palautetaan tyhjä lista

  const res = await fetch(
    `${BASE_URL}/search.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${query}`
  ); 
  // Haetaan API:sta ehdotuksia

  return res.json(); 
  // Palautetaan JSON-lista ehdotuksista
};

import { useState } from 'react'; 
// Tuodaan Reactin hook useState tilan hallintaan

import { fetchWeather } from '../services/weatherApi'; 
// Funktio, joka hakee säätiedot API:sta

export const useWeather = () => { 
  // Oma custom hook säädatan hakemiseen

  const [data, setData] = useState(null); 
  // data tallentaa haetun säädatan

  const [loading, setLoading] = useState(false); 
  // loading kertoo, onko haku käynnissä

  const [error, setError] = useState(null); 
  // error tallentaa mahdollisen virheen viestin

  const getWeather = async (city) => { 
    // Funktio, jolla haetaan sää kaupungille
    setLoading(true); 
    // Merkitään, että haku alkaa
    setError(null); 
    // Tyhjennetään mahdollinen aiempi virhe

    try {
      const result = await fetchWeather(city); 
      // Haetaan sää API:sta
      setData(result); 
      // Tallennetaan data
    } catch (err) {
      setError(err.message); 
      // Tallennetaan virhe, jos haku epäonnistuu
      setData(null); 
      // Tyhjennetään data virheen sattuessa
    } finally {
      setLoading(false); 
      // Haku valmis (onnistui tai epäonnistui)
    }
  };

  return { data, loading, error, getWeather }; 
  // Palautetaan tilat ja funktio hookista
};

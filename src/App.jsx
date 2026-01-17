import './styles/main.css'; 
// Tuodaan CSS-tyylit

import SearchBar from './components/SearchBar'; 
// Tuodaan hakupalkkikomponentti

import WeatherCard from './components/WeatherCard'; 
// Tuodaan sääkorttikomponentti

import { useWeather } from './hooks/useWeather'; 
// Tuodaan oma hook säätiedon hakemiseen

const App = () => { 
  // Pääkomponentti

  const { data, loading, error, getWeather } = useWeather(); 
  // Hookista saadaan:
  // data = säädata
  // loading = latausstatus
  // error = virheviesti
  // getWeather = funktio haun suorittamiseen

  return (
    <div className="app"> 
      {/* Sovelluksen keskusdiv */}
      <h1>🌦️ Weather API Explorer</h1> 
      {/* Otsikko */}

      <SearchBar onSearch={getWeather} /> 
      {/* Hakupalkki, kutsuu getWeather kun haetaan */}

      {loading && <p className="info">Loading...</p>} 
      {/* Näytetään latausteksti kun loading on true */}

      {error && <p className="error">{error}</p>} 
      {/* Näytetään virhe jos error ei ole null */}

      {data && <WeatherCard data={data} />} 
      {/* Näytetään sääkortti, jos data on haettu */}
    </div>
  );
};

export default App; 
// Viedään komponentti käyttöön muualle

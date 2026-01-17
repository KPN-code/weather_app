const WeatherCard = ({ data }) => { 
  // WeatherCard-komponentti saa propin "data", joka sisältää säädatan

  const { location, current } = data; 
  // Puretaan data muuttujiksi location (kaupunki) ja current (nyt-sää)

  return (
    <div className="card"> 
      {/* Kortin ulkokehys */}
      <h2>{location.name}, {location.country}</h2> 
      {/* Näytetään kaupunki ja maa */}
      <img src={current.condition.icon} alt="" /> 
      {/* Näytetään sääkuvake */}
      <p>{current.condition.text}</p> 
      {/* Lyhyt kuvaus säästä, esim. "Sunny" */}
      <h1>{current.temp_c}°C</h1> 
      {/* Nykyinen lämpötila */}
      <small>Feels like {current.feelslike_c}°C</small> 
      {/* Tuntuu kuin -lämpötila */}
    </div>
  );
};

export default WeatherCard; 
// Viedään komponentti käyttöön muualle


import { useEffect, useState } from 'react'; 
// Tuodaan Reactin tilanhallinta ja efektit

import { fetchSuggestions } from '../services/weatherApi'; 
// Funktio, joka hakee kaupunkiehdotuksia

import Suggestions from '../Suggestions'; 
// Komponentti, joka näyttää ehdotukset listana

const SearchBar = ({ onSearch }) => { 
  // Hakupalkki, joka saa propin onSearch (funktio haun suorittamiseen)

  const [query, setQuery] = useState(''); 
  // query tallentaa käyttäjän kirjoittaman tekstin

  const [suggestions, setSuggestions] = useState([]); 
  // suggestions tallentaa listan ehdotuksia

  useEffect(() => { 
    // Käydään läpi aina kun query muuttuu
    const timer = setTimeout(async () => { 
      if (query.length > 1) { 
        const results = await fetchSuggestions(query); 
        setSuggestions(results.slice(0, 5)); 
        // Haetaan ja näytetään max 5 ehdotusta
      } else {
        setSuggestions([]); 
        // Tyhjennetään ehdotukset, jos teksti liian lyhyt
      }
    }, 300); // odotetaan 300ms ennen hakua (debounce)

    return () => clearTimeout(timer); 
    // Tyhjennetään ajastin, jos query muuttuu uudelleen
  }, [query]);

  const handleSelect = (city) => { 
    // Kun käyttäjä valitsee ehdotuksen
    setQuery(city); 
    setSuggestions([]); 
    onSearch(city); 
    // Päivitetään hakuteksti, tyhjennetään ehdotukset ja haetaan
  };

  return (
    <div className="search-wrapper">
      <input
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        // Päivitetään query aina kun käyttäjä kirjoittaa
      />
      <button onClick={() => onSearch(query)}>Search</button> 
      {/* Suoritetaan haku napista */}
      <Suggestions items={suggestions} onSelect={handleSelect} /> 
      {/* Näytetään ehdotukset */}
    </div>
  );
};

export default SearchBar; 
// Viedään komponentti käyttöön muualle

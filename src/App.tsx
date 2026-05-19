import { useEffect, useState } from 'react';
import { fetchPokemonList } from './services/pokemonServices'; 
import type { Pokemon } from './services/pokemon';   
import './App.css';
import pokeball from "./assets/images/pokeball.png";
import icon from "./assets/images/icon.webp";
import lupa from "./assets/images/lupa.png";
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { PokemonGrid } from './components/PokemonGrid';

const typeColors: { [key: string]: string } = {
  grass: 'grass', fire: 'fire', water: 'water', electric: 'electric',
  psychic: 'psychic', ice: 'ice', dragon: 'dragon', dark: 'dark',
  fairy: 'fairy', normal: 'normal', fighting: 'fighting', flying: 'flying',
  poison: 'poison', ground: 'ground', rock: 'rock', bug: 'bug',
  ghost: 'ghost', steel: 'steel',
};

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [inicio, setInicio] = useState(0);
  const [fin, setFin] = useState(151);
  useEffect(() => {
    fetchPokemonList(inicio, fin).then(setPokemons);
  }, [inicio, fin]);


  const changeGeneration = (numInicio: number, numFin: number) => {
  setInicio(numInicio);
  setFin(numFin);
  };
  const filtered = pokemons.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toString().includes(searchTerm)
  );

  return (
    <div>
      <Header logo={pokeball} userIcon={icon} />
      <main>
        <section className="contenedor-main"> 
          <h2>Inicio</h2>
          <SearchBar 
            value={searchTerm} 
            onChange={setSearchTerm} 
            placeholder="Ej: Bulbasaur" 
            icon={lupa} 
          />
          <div id="container-generations">
            <button className="buttonKanto" onClick={() => changeGeneration(0, 151)}>Kanto</button>
            <button className="buttonJohto" onClick={() => changeGeneration(151, 251)}>Johto</button>
            <button className="buttonHoenn" onClick={() => changeGeneration(251, 386)}>Hoenn</button>
            <button className="buttonSinnoh" onClick={() => changeGeneration(386, 493)}>Sinnoh</button>
            <button className="buttonUnova" onClick={() => changeGeneration(493, 649)}>Unova</button>
            <button className="buttonKalos" onClick={() => changeGeneration(649, 721)}>Kalos</button>
            <button className="buttonAlola" onClick={() => changeGeneration(721, 809)}>Alola</button>
            <button className="buttonGalar" onClick={() => changeGeneration(809, 905)}>Galar</button>
            <button className="buttonPaldea" onClick={() => changeGeneration(905, 1025)}>Paldea</button>
          </div>
          <div className='container-filter'>
            <div className="section-filter">
              <div className="filter-dropdown">
                <p>Filtro: Tipos Pokemons</p>
                <img className='flecha-desplegable' src="src/assets/10017905.png" alt="flecha desplegable" />
              </div>
            </div>
          </div>
        </section>
        
        <PokemonGrid pokemons={filtered} typeColors={typeColors} />
      </main>
    </div>
  );
}

export default App;
import { useEffect, useState } from 'react';
import { fetchPokemonList } from './services/pokemonServices'; 
import type { Pokemon } from './services/pokemon';   
import './App.css';
import pokeball from "./assets/images/pokeball.png";
import icon from "./assets/images/icon.webp";
import lupa from "./assets/images/lupa.png";
import { Header } from './components/header';
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

  useEffect(() => {
    fetchPokemonList(151).then(setPokemons);
  }, []);

  const filtered = pokemons.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toString().includes(searchTerm)
  );

  return (
    <div>
      <Header logo={pokeball} userIcon={icon} />
      <main>
        <section className="contenedor-main">
          <h2>PokeWeb</h2>
          <SearchBar 
            value={searchTerm} 
            onChange={setSearchTerm} 
            placeholder="Ej: Bulbasaur" 
            icon={lupa} 
          />
        </section>
        
        <PokemonGrid pokemons={filtered} typeColors={typeColors} />
      </main>
    </div>
  );
}

export default App;
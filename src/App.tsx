import { useEffect, useState } from 'react';
import { fetchPokemonList } from './services/pokemonServices'; 
import type { Pokemon } from './services/pokemon';           
import './App.css';
import pokeball from "./assets/images/pokeball.png"
import icon from "./assets/images/icon.webp"

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemonList(1025).then((data) => {
      setPokemons(data);
    });
  }, []);
  
  return (
    <div>
      <header className="encabezado">
        <img src={pokeball} alt="Logo de la web de una pokeball" width={40} />


        <button className="boton-titulo">
          <a className="titulo" href="/">
            PokeWeb
          </a>
        </button>

        <nav className="enlaces">
          <ul>
            <li className="lista">
              <a className="enlace" href="/details">
                Detalles
              </a>
            </li>
          </ul>
        </nav>

        <button className="boton-user">
        <img src={icon} alt="Imagen del logo del usuario" width={75} />
        </button>
      </header>
    <main className="pokedex-grid">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3> #{pokemon.id} | {pokemon.name}</h3>
            <p>Tipo: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App
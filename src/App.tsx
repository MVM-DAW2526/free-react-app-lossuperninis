import { useEffect, useState } from 'react';
import { fetchPokemonList } from './services/pokemonServices'; 
import type { Pokemon } from './services/pokemon';          
import './App.css';
import pokeball from "./assets/images/pokeball.png"
import icon from "./assets/images/icon.webp"
import lupa from "./assets/images/lupa.png"

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
    fetchPokemonList(20).then((data) => {
      setPokemons(data);
    });
  }, []);

const filteredPokemons = pokemons.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pokemon.id.toString().includes(searchTerm) // También permite buscar por ID
  );


    const typeColors: { [key: string]: string } = {
    grass: 'grass',
    fire: 'fire',
    water: 'water',
    electric: 'electric',
    psychic: 'psychic',
    ice: 'ice',
    dragon: 'dragon',
    dark: 'dark',
    fairy: 'fairy',
    normal: 'normal',
    fighting: 'fighting',
    flying: 'flying',
    poison: 'poison',
    ground: 'ground',
    rock: 'rock',
    bug: 'bug',
    ghost: 'ghost',
    steel: 'steel',
  };



  return (
    <div>
      <header className="encabezado">
        <img src={pokeball} alt="Logo de la web de una pokeball" width={40} />
        <button className="boton-titulo">
          <a className="titulo" href="./App.tsx">
            PokeWeb
          </a>
        </button>

        <nav className="enlaces">
          <ul>
            <li className="lista">
            </li>
          </ul>
        </nav>

        <button className="boton-user">
        <img src={icon} alt="Imagen del logo del usuario" width={75} />
        </button>
      </header>
        <main>
        <section>
        <div className="contenedor-main">
          <div className="titulo-abajo">
            <h2>PokeWeb</h2>
          </div>
          <div>
            <p className="info-buscador">Busca un Pokemon por su nombre o por el número de la Pokedex.</p>
          </div>
          <div className="contenedor-buscador">
        <img src={lupa} alt="Lupa buscador" width={40} height={40} className="icono-lupa"/>
        <input 
        className="buscador" 
        type="text" 
        placeholder="Ej: Bulbasur" 
        width={600} 
        height={50}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
          </div>
        </div>
      </section>
      
      <section className='contenedor-desplegable'>
        <div className="seccion-filtrado">
            <div className="filtrado-desplegable">
                Filtro: Generaciones
            </div>
        </div>
        <hr className="separador"/>
      </section>
    <section className="pokedex-grid">
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.id} className={`pokemon-card ${typeColors[pokemon.types[0].type.name]}`}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3> #{pokemon.id} | {pokemon.name}</h3>
              <p>Tipo: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
            </div>
        ))}
        </section>
      </main>
    </div>
  );
}

export default App
import { TypeBadge } from './TypeBadge';

export const PokemonCard = ({ pokemon, typeColors }: any) => (
  <div className={`pokemon-card ${typeColors[pokemon.types[0].type.name]}`}>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h3>#{pokemon.id} | {pokemon.name}</h3>
    <div className="contenedor-tipos">
      {pokemon.types.map((t: any) => (
        <TypeBadge 
          key={t.type.name} 
          type={t.type.name} 
          colorClass={typeColors[t.type.name]} 
        />
      ))}
    </div>
  </div>
);
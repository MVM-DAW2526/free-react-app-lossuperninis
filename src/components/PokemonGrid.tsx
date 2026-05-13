import { PokemonCard } from './PokemonCard';

export const PokemonGrid = ({ pokemons, typeColors }: any) => (
  <section className="pokedex-grid">
    {pokemons.map((p: any) => (
      <PokemonCard key={p.id} pokemon={p} typeColors={typeColors} />
    ))}
  </section>
);
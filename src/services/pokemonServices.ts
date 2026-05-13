import type { Pokemon } from '../services/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit: number = 20): Promise<Pokemon[]> => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await response.json();
  
  const pokemonPromises = data.results.map(async (p: { url: string }) => {
    const res = await fetch(p.url);
    return res.json();
  });

  return Promise.all(pokemonPromises);
};
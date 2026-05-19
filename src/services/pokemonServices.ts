import type { Pokemon } from '../services/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (offset: number, limit: number): Promise<Pokemon[]> => {
  const end = limit - offset
  const response = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${end}`);
  const data = await response.json();
  
  const pokemonPromises = data.results.map(async (p: { url: string }) => {
    const res = await fetch(p.url);
    return res.json();
  });

  return Promise.all(pokemonPromises);
};
import { useEffect, useState } from "react";

const useGetPokemonsSearch = (query = null) => {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!query) return;  // pas de requete = retourne rien

    const url = `https://pokebuildapi.fr/api/v1/pokemon/${query}`;  //query attend un nom de Pokemon (de base query est null)

    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des Pokémon");
        }
        return response.json();
      })
      .then((data) => {
        setPokemons([data]); 
      })
      .catch((error) => {
        console.error(error);
        setPokemons([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);  // A chaque fois qu'on change de nom de pokemon mon useEffect est réutilisé

  return { pokemons, isLoading }; // Ce hook retourne un objet pokemons et isLoadinf
};

export default useGetPokemonsSearch;

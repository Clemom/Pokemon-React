import { useEffect, useState } from "react";

const useGetPokemons = (id = null, random = false) => {
  const [pokemons, setPokemons] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const randomArray = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    let url = "https://pokebuildapi.fr/api/v1/pokemon";

    if (id) {
      url = `https://pokebuildapi.fr/api/v1/pokemon/${id}`;
    }

    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let pokemonsData;

        if (random && Array.isArray(data)) {
          pokemonsData = randomArray(data);
        } else if (Array.isArray(data)) {
          pokemonsData = data;
        } else {
          pokemonsData = [data];
        }
        setPokemons(pokemonsData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des Pokémon :", error);
        setPokemons([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, random]);

  return { pokemons, isLoading };
};

export default useGetPokemons;

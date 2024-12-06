import { useState, useEffect } from "react";

const useGetRandomPokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomPokemon = () => {
    setIsLoading(true);
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length); // Me donne une valeur décimale puis l'arrondi à l'inférieur puis je multiplie par l'élément dans le tableau
        setPokemon(data[randomIndex]);                                // Ca me donne un Pokemon alétoire.
      })
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return { pokemon, isLoading, fetchRandomPokemon };
};

export default useGetRandomPokemon;

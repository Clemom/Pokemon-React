import { useEffect, useState } from "react";

const useGetPokemonsTypes = (random = false) => {
  const [pokemonsTypes, setPokemonsTypes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const randomArray = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const fetchTypes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://pokebuildapi.fr/api/v1/types");
        const data = await response.json();

        let typesData;
        if (random) {
          typesData = randomArray(data);
        } else {
          typesData = data;
        }

        setPokemonsTypes(typesData);
      } catch (error) {
        console.error("Erreur lors de la récupération des Types :", error);
        setPokemonsTypes([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTypes();
  }, [random]); // Si le composant est remonté, re-fetch le random

  return { pokemonsTypes, isLoading };
};

export default useGetPokemonsTypes;

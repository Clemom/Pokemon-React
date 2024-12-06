import React from "react";
import { useLocation } from "react-router-dom";
import PokemonCard from "../common/PokemonCard";
import Header from "../common/Header";
import Footer from "../common/Footer";
import useGetPokemonsSearch from "./PokemonSearchHook";

const PokemonSearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query"); 
  const { pokemons, isLoading } = useGetPokemonsSearch(query);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8"> 
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Résultats pour : {query}
        </h2>
        {isLoading && <p className="text-gray-500">Chargement des résultats...</p>}
        {!isLoading && pokemons && pokemons.length === 0 && (   //Si le chargement est fini, que pokemon est défini et que la liste est = à 0, pas de Pokémon
          <p className="text-gray-500">Aucun Pokémon trouvé.</p>
        )}
        {!isLoading && pokemons && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PokemonSearchPage;

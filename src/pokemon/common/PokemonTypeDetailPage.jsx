import React from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Header from "./Header";
import Footer from "./Footer";
import useGetPokemons from "../pokemonliste/PokemonListeHook";

const PokemonTypeDetailPage = () => {
  const { type } = useParams();
  const { pokemons, isLoading } = useGetPokemons(null);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <p className="text-gray-500 text-lg">Chargement des Pokémon...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!pokemons || pokemons.length === 0) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <p className="text-gray-500 text-lg">Aucun Pokémon trouvé pour ce type.</p>
        </div>
        <Footer />
      </>
    );
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.apiTypes.some((t) => t.name.toLowerCase() === type.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Pokémon du type <span className="capitalize">{type}</span>
          </h2>
          {filteredPokemons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              Aucun Pokémon de ce type n'est disponible.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PokemonTypeDetailPage;

import React from "react";
import useGetRandomPokemon from "./PokemonRandomHook";
import Header from "../common/Header";
import Footer from "../common/Footer";
import PokemonCard from "../common/PokemonCard";

const PokemonRandomComponent = () => {
  const { pokemon, fetchRandomPokemon } = useGetRandomPokemon();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-gray-50 shadow-md rounded-lg border border-gray-200">
          <PokemonCard pokemon={pokemon} />
          <button
            onClick={fetchRandomPokemon}
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Nouveau Pokémon !
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PokemonRandomComponent;

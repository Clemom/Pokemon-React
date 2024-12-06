import React from "react";
import { useParams } from "react-router-dom";
import useGetPokemons from "../pokemonliste/PokemonListeHook";
import Header from "./Header";
import Footer from "./Footer";
import PokemonCard from "./PokemonCard";

const PokemonDetailPage = () => {
  const { id } = useParams();
  const { pokemons, isLoading } = useGetPokemons(id);

  if (isLoading) {
    return (
      <>
        <Header />
        <p>Chargement des informations du Pokémon...</p>
        <Footer />
      </>
    );
  }

  if (!pokemons || pokemons.length === 0) {
    return (
      <>
        <Header />
        <p>Aucun Pokémon trouvé.</p>
        <Footer />
      </>
    );
  }

  const pokemon = pokemons[0];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <PokemonCard pokemon={pokemon} isDetailPage={true} />
      </div>
      <Footer />
    </>
  );
};

export default PokemonDetailPage;

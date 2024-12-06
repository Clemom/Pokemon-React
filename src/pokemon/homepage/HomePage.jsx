import React from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../common/PokemonCard";
import PokemonTypesCard from "../common/PokemonTypesCard";
import useGetPokemons from "../pokemonliste/PokemonListeHook";
import useGetPokemonsTypes from "../pokemontype/PokemonTypeHook";
import Header from "../common/Header";
import Footer from "../common/Footer";

const HomePage = () => {

  let randomPokemons = [];
  const { pokemons, isLoading: isLoadingPokemons } = useGetPokemons(null, true); //le true active mon randomnisation
  if (pokemons) {
    randomPokemons = pokemons.slice(0, 6);
  }
  
  let randomTypes = [];
  const { pokemonsTypes, isLoading: isLoadingTypes } = useGetPokemonsTypes(true);
  if (pokemonsTypes) {
    randomTypes = pokemonsTypes.slice(0, 3);
  }
  

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <header className="text-center py-6">
          <h1 className="text-4xl font-bold text-gray-800">Bienvenue sur PokeDev</h1>
        </header>

        {/* Section des 6 Pokémons aléatoire avec la redirection vers tous les Pokemons ou juste vers le Pokemon cliqué */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              <Link to="/liste-pokemon" className="hover:underline">
                Découvrez nos Pokémons
              </Link>
            </h2>
          </div>

          {isLoadingPokemons && (
            <p className="text-center text-gray-500">Chargement des Pokémons...</p>
          )}

          {!isLoadingPokemons && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {randomPokemons.map((pokemon) => (
                <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                  <PokemonCard pokemon={pokemon} />
                </Link>
              ))}
            </div>
          )}
        </section>

          {/* Section des 3 Types aléatoire avec la redirection vers tous les Types ou juste vers le Type cliqué */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              <Link to="/liste-type" className="hover:underline">
                Découvrez nos Types
              </Link>
            </h2>
          </div>

          {isLoadingTypes && (
            <p className="text-center text-gray-500">Chargement des Types...</p>
          )}

          {!isLoadingTypes && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {randomTypes.map((type) => (
                <Link to={`/type/${type.name}`} key={type.name}>
                  <PokemonTypesCard type={type} />
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

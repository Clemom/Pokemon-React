import Footer from "../common/Footer";
import Header from "../common/Header";
import PokemonCard from "../common/PokemonCard";
import useGetPokemons from "./PokemonListeHook";

const PokemonListe = () => {
  const { pokemons, isLoading } = useGetPokemons();

  if (isLoading) {
    return (
      <>
        <Header />
        <p className="text-center text-gray-700">Chargement des Pokémon...</p>
        <Footer />
      </>
    );
  }

  if (!pokemons || pokemons.length === 0) {
    return (
      <>
        <Header />
        <p className="text-center text-gray-700">Aucun Pokémon trouvé.</p>
        <Footer />
      </>
    );
  }


  const pokemonsByGeneration = pokemons.reduce((gen, pokemon) => {
    const generation = pokemon.apiGeneration || "Génération Inconnue";
    if (!gen[generation]) gen[generation] = [];
    gen[generation].push(pokemon);
    return gen;
  }, {});

  return (
    <>
      <Header />
      <main className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {Object.entries(pokemonsByGeneration).map(([generation, generationPokemons]) => (
            <div key={generation} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Génération {generation}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {generationPokemons.map((pokemon) => (
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PokemonListe;

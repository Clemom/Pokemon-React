import Footer from "../common/Footer";
import Header from "../common/Header";
import PokemonTypesCard from "../common/PokemonTypesCard";
import useGetPokemonsTypes from "./PokemonTypeHook";

const PokemonTypePage = () => {
    const { pokemonsTypes, isLoading } = useGetPokemonsTypes(false);
    

    if (isLoading) {
        return (
          <>
            <Header />
            <p>En cours de chargement !</p>
            <Footer />
          </>
        );
    }

    if (!pokemonsTypes || pokemonsTypes.length === 0) {
        return (
          <>
            <Header />
            <p>Aucun type de Types trouvé.</p>
            <Footer />
          </>
        );
    }

    return (
        <>
          <Header />
          <main className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Toutes les Types
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pokemonsTypes.map((type) => (
                  <PokemonTypesCard key={type.id} type={type} />
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </>
    );
};

export default PokemonTypePage;

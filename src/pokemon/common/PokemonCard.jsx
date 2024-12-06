import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon, isDetailPage = false }) => {
  if (!pokemon) {
    return <p className="text-center text-gray-500">En attente du Pokémon...</p>;
  }

  const cardContent = (
    <div className="pokemon-card bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      {/* Nom */}
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
        {pokemon.name}
      </h3>

      {/* Image */}
      <div className="flex justify-center mb-4">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Types */}
      <div className="flex justify-center space-x-2 mb-4">
        {pokemon.apiTypes.map((type) => (
          <img
            key={type.name}
            src={type.image}
            alt={type.name}
            className="w-10 h-10"
          />
        ))}
      </div>

      {/* Stats */}
      <ul className="text-sm text-gray-700 space-y-1">
        {Object.entries(pokemon.stats).map(([statName, statValue]) => (
          <li
            key={statName}
            className="flex justify-between items-center border-b border-gray-200 py-1"
          >
            <span className="font-medium capitalize text-gray-800">{statName}:</span>
            <span className="text-gray-600">{statValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (isDetailPage) {
    return cardContent;
  } else {
    return (
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="block hover:scale-105 transition-transform duration-200"
      >
        {cardContent}
      </Link>
    );
  }
};

export default PokemonCard;

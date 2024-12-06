import React from "react";
import { Link } from "react-router-dom";

const PokemonTypesCard = ({ type }) => {
  return (
    <Link
      to={`/type/${type.name}`}
      className="block transform hover:scale-105 transition-transform duration-200"
    >
      <div className="pokemon-type-card bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg">
        {/* Nom du type */}
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-4 capitalize">
          {type.name}
        </h3>

        {/* Image du type */}
        <div className="flex justify-center">
          <img
            src={type.image}
            alt={type.name}
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </Link>
  );
};

export default PokemonTypesCard;

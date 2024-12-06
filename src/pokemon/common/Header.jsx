import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu burger

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    const query = event.target.query.value;

    navigate("/pokemon-search?query=" + query);
  };

  return (
    <header className="bg-gray-900 shadow-md border-b-4 border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <img
            src="/pokeball.png"
            alt=""
            className="w-8 h-8"
          />
          <Link to="/" className="text-gray-200">
            PokeDev
          </Link>
        </h1>

        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-gray-100 font-medium transition"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/liste-pokemon"
                className="text-gray-400 hover:text-gray-100 font-medium transition"
              >
                Pokemon
              </Link>
            </li>
            <li>
              <Link
                to="/liste-type"
                className="text-gray-400 hover:text-gray-100 font-medium transition"
              >
                Types
              </Link>
            </li>
            <li>
              <Link
                to="/pokemon-surprise"
                className="text-gray-400 hover:text-gray-100 font-medium transition"
              >
                Pokemon Surprise
              </Link>
            </li>
          </ul>
          <form
            onSubmit={handleSubmitSearch}
            className="flex items-center border border-gray-700 rounded-md overflow-hidden bg-gray-800"
          >
            <input
              type="search"
              name="query"
              placeholder="Rechercher Pokémon"
              className="px-4 py-2 text-gray-300 placeholder-gray-500 bg-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 hover:bg-gray-600 transition"
            >
              Rechercher
            </button>
          </form>
        </nav>

        {/* Responsive petit écran */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 hover:text-gray-100 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-gray-100 font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/liste-pokemon"
                className="text-gray-400 hover:text-gray-100 font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Pokemon
              </Link>
            </li>
            <li>
              <Link
                to="/liste-type"
                className="text-gray-400 hover:text-gray-100 font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Types
              </Link>
            </li>
            <li>
              <Link
                to="/pokemon-surprise"
                className="text-gray-400 hover:text-gray-100 font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Pokemon Surprise
              </Link>
            </li>
          </ul>
          <form
            onSubmit={handleSubmitSearch}
            className="flex items-center px-4 mt-4 border border-gray-700 rounded-md overflow-hidden bg-gray-700"
          >
            <input
              type="search"
              name="query"
              placeholder="Rechercher Pokémon"
              className="flex-grow px-4 py-2 text-gray-300 placeholder-gray-500 bg-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 hover:bg-gray-500 transition"
            >
              Rechercher
            </button>
          </form>
        </nav>
      )}
    </header>
  );
};

export default Header;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import HomePage from './pokemon/homepage/HomePage'
import PokemonListe from './pokemon/pokemonliste/PokemonListPage'
import PokemonRandomComponent from './pokemon/pokemonrandom/PokemonRandomPage'
import PokemonTypePage from './pokemon/pokemontype/PokemonTypePage'
import PokemonSearchPage from './pokemon/pokemonsearch/PokemonSearchPage'
import PokemonDetailPage from './pokemon/common/PokemonDetailPage'
import PokemonTypeDetailPage from './pokemon/common/PokemonTypeDetailPage'


function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/liste-pokemon" element={<PokemonListe />} />
        <Route path="/liste-type" element={<PokemonTypePage />} />
        <Route path="/pokemon-surprise" element={<PokemonRandomComponent />} />
        <Route path="/pokemon-search" element={<PokemonSearchPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
        <Route path="/type/:type" element={<PokemonTypeDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

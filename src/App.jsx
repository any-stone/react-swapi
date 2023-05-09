import { Routes, Route } from 'react-router-dom'
import AllStarships from './components/AllStarships/AllStarships'
import StarshipDetails from './components/StarshipDetails/StarshipDetails'
import Nav from './components/Nav/Nav'
import './App.css'

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/starships' element={<AllStarships />} />
      <Route path='/starships/:starshipId' element={<StarshipDetails />} />
    </Routes>
    </>
  )
}

export default App
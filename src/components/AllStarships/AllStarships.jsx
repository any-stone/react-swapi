import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { getAllStarships } from '../../services/sw-api'

import './AllStarships.css'

const AllStarships = () => {
  const [starships, setStarships] = useState([]);

  const fetchStarships = useCallback(async () => {
    const starshipData = await getAllStarships();
    setStarships(starshipData.results);
  }, [])

  useEffect(() => {
    fetchStarships()
  }, [fetchStarships])

  if (!starships.length) return <h1>Loading...</h1>

  return (
    <main>
      <h1>Starships</h1>
      {starships.map((starship, idx) => {
        const starshipId = starship.url.split('/').filter(Boolean).pop()
        return (
          <div className="starship-card" key={idx}>
            <Link to={`/starships/${starshipId}`}>{starship.name}</Link>
          </div>
        )
      })}
    </main>
  )
}

export default AllStarships

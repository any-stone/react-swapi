import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getStarship } from '../../services/sw-api'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const { starshipId } = useParams()
  
  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getStarship(starshipId)
      setStarshipDetails(data)
    }
    fetchDetails()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading...</h1>

  return (
    <main>
      <h1>Starship Details</h1>
        <div className="starship-details-card">
          <h3>Name: {starshipDetails.name}</h3>
          <h3>Model: {starshipDetails.model}</h3>
          <Link to='/starships'>RETURN</Link>
        </div>
    </main>
  )
}

export default StarshipDetails

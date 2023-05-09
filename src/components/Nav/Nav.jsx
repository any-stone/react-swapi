import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to={"/starships"}>Star Wars Starships</Link>
    </nav>
  )
}

export default Nav

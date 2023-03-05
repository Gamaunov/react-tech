import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <NavLink to='/'>home</NavLink>
    <NavLink to='/menu'>menu</NavLink>
    <NavLink to='/contact'>contact</NavLink>
  </div>
  )
}

export default Navbar
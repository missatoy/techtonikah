import { NavLink } from "react-router-dom"

export default function Navbar() {

  function isActive({isActive}) {
    return isActive ? "active" : ""
  }

  return (
    <div className="navbar">
      <NavLink to="/prints" className={isActive}>Prints</NavLink>
      <NavLink to="/tattoos" className={isActive}>Tattoos</NavLink>
      <NavLink to="/about" className={isActive}>About</NavLink>
    </div>
  )
}

import { NavLink } from "react-router-dom"

export default function Navbar() {

  function isActive({isActive}) {
    return isActive ? "active" : ""
  }

  return (
    <>
      <div className="navbar">
        <NavLink to="/visual-arts" className={isActive}>Visual Arts</NavLink>
        <NavLink to="/tattoos" className={isActive}>Tattoos</NavLink>
        <NavLink to="/about" className={isActive}>About</NavLink>
        <NavLink to="/refs" className={isActive}>Refs</NavLink>
      </div>
    </>
  )
}

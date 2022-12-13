import { NavLink } from "react-router-dom"

export default function Navbar() {

  function isActive({isActive}) {
    return isActive ? "active" : ""
  }

  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/" className={isActive}>Home</NavLink></li>
        <li><NavLink to="/tattoos" className={isActive}>Tattoos</NavLink></li>
        <li><NavLink to="/prints" className={isActive}>Prints</NavLink></li>
        <li><NavLink to="/about" className={isActive}>About</NavLink></li>
      </ul>
    </div>
  )
}

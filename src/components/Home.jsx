import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div className="banner">
      <h1 className="techtonikah">TECHTONIKAH</h1>
      <div className="menu-items typewriter">
        <h2><NavLink className="menu-item" to="/prints">Prints</NavLink>, <NavLink className="menu-item" to="/tattoos">Tattoos</NavLink>, <NavLink className="menu-item" to="/about">About me</NavLink></h2>
      </div>
    </div>
  )
}

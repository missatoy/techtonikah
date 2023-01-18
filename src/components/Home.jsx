import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="banner">
      <div className="wide-screen">
        <div className="text-boxes">
          <h1 className="techtonikah">TECHTONIKAH</h1>
          <div className="menu-items typewriter">
            <h2><NavLink className="menu-item" to="/visual-arts">Visual Arts</NavLink>, <NavLink className="menu-item" to="/tattoos">Tattoos</NavLink>, <NavLink className="menu-item" to="/about">About</NavLink>, <NavLink className="menu-item" to="/refs">Refs</NavLink></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

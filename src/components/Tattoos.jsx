import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"

export default function Tattoos() {
  return (
    <>
      <NavLink className="top-bar" to="/">Techtonikah</NavLink>
      <div className="padding-top">
        <h2>Here's your tattoos</h2>
      </div>
      <Navbar />
    </>
  )
}

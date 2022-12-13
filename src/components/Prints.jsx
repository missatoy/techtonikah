import Navbar from "./Navbar"
import { NavLink } from "react-router-dom"

export default function Prints() {
  return (
    <>
      <NavLink className="top-bar" to="/">Techtonikah</NavLink>
      <div className="padding-top">
        <h2>Here's your prints</h2>
      </div>
      <Navbar />
    </>
  )
}

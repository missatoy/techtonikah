import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"

export default function About() {
  return (
    <>
      <NavLink className="top-bar" to="/">Techtonikah</NavLink>
      <div className="padding-top">
        <h2>Here's your about</h2>
      </div>
      <Navbar />
    </>
  )
}

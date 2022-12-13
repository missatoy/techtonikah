import Navbar from "./Navbar"
import { Link } from "react-router-dom"

export default function Prints() {
  return (
    <>
      <Link className="top-bar" to="/">Techtonikah</Link>
      <div className="padding-top">
        <h2>Here's your prints</h2>
      </div>
      <Navbar />
    </>
  )
}

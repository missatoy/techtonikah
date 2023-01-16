import Bottombar from "./Navbars/Bottombar"
import Topbar from "./Navbars/Topbar"
import RetroWindow from "./Visuals/RetroWindow"

export default function About() {
  return (
    <>
      <Topbar />
        <div className="about-banner">
          <div>
            <RetroWindow name="Jade" className="about-windows" />
          </div>
          <div>
            <RetroWindow name="Techtonikah" className="about-windows" />
          </div>
        </div>
      <Bottombar />
    </>
  )
}

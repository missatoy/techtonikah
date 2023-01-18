import Bottombar from "./navbars/Bottombar"
import Topbar from "./navbars/Topbar"
import RetroWindow from "./visuals/RetroWindow"

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

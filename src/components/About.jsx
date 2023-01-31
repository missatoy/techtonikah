import Topbar from "./navbars/Topbar.jsx";
import Botbar from "./navbars/Botbar.jsx";
import RetroWindow from "./visuals/RetroWindow.jsx";

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
      <Botbar />
    </>
  )
}

import Bottombar from "./Navbars/Bottombar"
import Topbar from "./Navbars/Topbar"
import RetroWindow from "./Visuals/RetroWindow"

export default function About() {
  return (
    <>
      <Topbar />
      <div className="container windows-layout-one justify-content-center mt-5 mb-3">
        <div>
          <RetroWindow />
        </div>
        <div>
          <RetroWindow />
        </div>
      </div>
      <Bottombar />
    </>
  )
}

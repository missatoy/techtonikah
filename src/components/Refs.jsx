import Topbar from "./Navbars/Topbar.jsx"
import Botbar from "./navbars/Botbar.jsx"
import LoadingBar from "./visuals/LoadingBar.jsx"

export default function Refs() {

  return (
    <>
      <Topbar />
      <div className="d-flex justify-content-center align-items-center flex-column about-banner">
        <h1>Loading...</h1>
        <LoadingBar />
      </div>
      <Botbar />
    </>
  )
}

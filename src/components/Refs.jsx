import Topbar from "./Navbars/Topbar.jsx"
import Botbar from "./navbars/Botbar.jsx"
import LoadingBar from "./visuals/LoadingBar.jsx"

export default function Refs() {

  return (
    <>
      <Topbar />
      <div className="loading-banner">
        <h1>Loading...</h1>
        <LoadingBar />
      </div>
      <Botbar />
    </>
  )
}

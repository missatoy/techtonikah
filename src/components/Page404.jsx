import Botbar from "./navbars/Botbar.jsx";
import Topbar from "./navbars/Topbar.jsx";

export default function Page404() {
  return (
    <>
    <Topbar />
    <div className="d-flex flex-column justify-content-center align-items-center position-absolute w-100 h-75">
      <h2>404</h2>
      <h2>Page not found</h2>
    </div>
    <Botbar />
    </>
  )
}

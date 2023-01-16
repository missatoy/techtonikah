import Navbar from "./Navbars/Bottombar"
import Topbar from "./Navbars/Topbar"
import FormTattoos from "./Forms/FormTattoos"
import RetroWindow from "./Visuals/RetroWindow"

export default function Tattoos() {
  const tattoosText = (
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima tempora enim, pariatur accusamus doloribus qui possimus debitis sed voluptas nulla dolor aliquam saepe corporis voluptate voluptatem ipsum magni necessitatibus quia!</p>
  )

  return (
    <>
      <Topbar />
      <div className="container">
        <div className="windows-layout mt-3 mb-5">
          <div>
            <RetroWindow name="Tattoos" content={tattoosText} />
          </div>
          <div className="mt-5">
            <RetroWindow name="Contact Me" content={<FormTattoos />} />
          </div>
        </div>
        <div className="windows-layout mb-3">
          <div className="d-flex flex-column align-items-center">
            <RetroWindow name="Catalog Tattoos" content={tattoosText} className="catalog-margin-bottom" />
            <a href="url" className="catalog-link catalog-link-margin-bottom">Link text</a>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  )
}

import FormTattoos from "./forms/FormTattoos.jsx";
import Botbar from "./navbars/Botbar.jsx";
import Topbar from "./navbars/Topbar.jsx";
import RetroWindow from "./visuals/RetroWindow.jsx";

export default function Tattoos() {
  const tattoosText = (
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima tempora enim, pariatur accusamus doloribus qui possimus debitis sed voluptas nulla dolor aliquam saepe corporis voluptate voluptatem ipsum magni necessitatibus quia!</p>
  )

  return (
    <>
      <Topbar />
      <div className="container">
        <div className="windows-layout-one justify-content-center mt-3">
          <div>
            <RetroWindow name="Tattoos" content={tattoosText} className="retro-window" />
          </div>
          <div>
            <RetroWindow name="Contact Me" content={<FormTattoos />} className="retro-window tattoos-contact-form-margin-top" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="url" className="catalog-link catalog-tattoos-link-margin">Link text</a>
        </div>
        <div className="windows-layout-two justify-content-center mb-3">
          <div className="d-flex flex-column align-items-center">
            <RetroWindow name="Catalog Tattoos" content={tattoosText} className="retro-window catalog-margin-bottom" />
          </div>
          <div className="d-flex flex-column align-items-center catalog-tattoos-margin-top">
            <RetroWindow name="Catalog Tattoos" content={tattoosText} className="retro-window catalog-margin-bottom" />
          </div>
          <div className="d-flex flex-column align-items-center">
            <RetroWindow name="Catalog Tattoos" content={tattoosText} className="retro-window catalog-margin-bottom" />
          </div>
        </div>
      </div>
      <Botbar />
    </>
  )
}

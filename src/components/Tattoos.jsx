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
      <div className="container windows-layout mb-4">
        <RetroWindow name="Tattoos" content={tattoosText} />
        <RetroWindow name="Contact us" content={<FormTattoos />} />
      </div>
      <Navbar />
    </>
  )
}

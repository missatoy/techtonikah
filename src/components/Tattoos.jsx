import Navbar from "./Navbars/Bottombar"
import Topbar from "./Navbars/Topbar"
import FormTattoos from "./Forms/FormTattoos"

export default function Tattoos() {
  return (
    <>
      <Topbar />
      <div className="container">
        <h2>Here's your tattoos</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni velit quo fugit atque dignissimos non ullam iste corporis nostrum dolorem, ipsum aperiam dolor illum fugiat officiis illo, voluptatem voluptates pariatur?</p>
        <FormTattoos />
      </div>
      <Navbar />
    </>
  )
}

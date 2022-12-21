import Navbar from "./Navbar"
import Topbar from "./Topbar"

export default function Tattoos() {
  return (
    <>
      <Topbar />
      <div className="container">
        <h2>Here's your tattoos</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni velit quo fugit atque dignissimos non ullam iste corporis nostrum dolorem, ipsum aperiam dolor illum fugiat officiis illo, voluptatem voluptates pariatur?</p>
      </div>
      <Navbar />
    </>
  )
}

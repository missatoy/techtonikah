import Bottombar from "./Bottombar"
import Topbar from "./Topbar"

export default function About() {
  return (
    <>
      <Topbar />
      <div className="container">
        <h2>Here's your about</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas velit nemo maxime cum corporis eius. Dolorem dignissimos voluptate omnis quae qui at, laboriosam ullam exercitationem eos nihil ratione impedit minima!</p>
      </div>
      <Bottombar />
    </>
  )
}

import Navbar from "./Navbars/Bottombar"
import Topbar from "./Navbars/Topbar"
import FormArts from "./Forms/FormArts"
import RetroWindow from "./Visuals/RetroWindow"

export default function VisualArts() {
  const visualArtsText = (
    <>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam impedit soluta quia doloremque? Officia soluta, recusandae perspiciatis minus provident in! Repellat quia ipsum cumque est laboriosam, eaque quo aliquid excepturi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis voluptatem deleniti. Tempore blanditiis, eveniet atque quia molestiae non enim praesentium alias ratione quo rem fugiat distinctio sed inventore et.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim, reprehenderit asperiores tempora, excepturi autem atque fugit pariatur earum ipsum repudiandae fuga in rerum perspiciatis laborum non soluta velit sequi!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores expedita voluptate, optio placeat laboriosam corporis cumque error natus. Nihil nemo similique voluptatum magnam consequatur obcaecati architecto ratione ducimus impedit voluptatibus?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eius aliquid quam nemo dolore veniam illo nulla, veritatis beatae ipsam architecto eligendi, a aliquam numquam maiores voluptatem pariatur, ea eos?</p>
    </>
  )

  return (
    <>
      <Topbar />
      <div className="container windows-layout mb-3">
        <div>
          <RetroWindow name="Introductional text" content={visualArtsText} />
        </div>
        <div className="d-flex flex-column align-items-center">
          <RetroWindow name="Catalog Prints" content={visualArtsText} className="catalog-margin-bottom" />
          <a href="url" className="catalog-link catalog-link-margin-bottom">Link text</a>
        </div>
      </div>
      <div className="container windows-layout mb-3">
        <div className="d-flex flex-column align-items-center">
          <RetroWindow name="Catalog Canvas" content={visualArtsText} className="catalog-margin-bottom" />
          <a href="url" className="catalog-link catalog-link-margin-bottom">Link text</a>
        </div>
        <div>
          <RetroWindow name="Contact Us" content={<FormArts />} />
        </div>
      </div>
      <Navbar />
    </>
  )
}

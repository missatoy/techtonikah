import FormTattoos from "./forms/FormTattoos.jsx";
import Topbar from "./navbars/Topbar.jsx";
import RetroWindow from "./visuals/RetroWindow.jsx";
import Botbar from "./navbars/Botbar.jsx";

export default function Tattoos() {
  const tattoosText = (
    <p>
      handpoke (rendpoque, poc poc, poke, tatuagem sem máquina,...) é uma técnica de pigmentação corporal manual, ou seja, sem eletricidade. somente a agulha e a tinta na pele :) <br />
      <br />
      práticas de modificação corporal como pigmentação, perfuração ou escarnificação são muito antigas e tradicionais, a maneira de realizar esses procedimentos é construída culturalmente e se renova constantemente por quem a pratica, mas o ínicio da história da tatuagem começa na pigmentação manual, exemplos que sustentam sua tradição até hoje são: o tebori no Japão ou o batok nas Filipinas para o povo Kalinga e na Nova Zelândia , em contextos cerimoniais, ou seja, de importância social e espiritual. práticas muito voltadas ao processo todo, para além do estético. e que carregam suas tecnologias de biossegurança correspondentes aos seus tempos históricos. <br />
      <br />
      com o tempo e contato de diferentes culturas essas práticas tomaram novas formas, a máquina de tatuagem (elétricas ou pens) surgem pra facilitar o processo, e demarcam outras expressões culturais. <br />
      <br />
      hoje, tanto a tattoo com máquina como a sem podem ter sentidos diferentes para cada tatuadore que você conheça, por isso é importante que você pesquise bem sobre  tatuadores que interessam e se você se sente confortável com esse processo. <br />
      <br />

      uma sessão comigo tem no mínimo 2h, para além da lentidão do processo de pigmentação, o processo de preparação do espaço (uma parte feita antes do cliente chegar e outra enquanto ele espera) e a aplicação do decalque para que o desenho e o local sejam ideais e adequados ao desejo do cliente são etapas que não podem ser apressadas. <br />
      <br />
      outras informações importantes são apresentadas depois da marcação e antes da sessão.
    </p>
  )

  return (
    <>
      <Topbar />
      <div className="container">
        <div className="windows-layout-one justify-content-center">
          <div>
            <RetroWindow name="TATTOO" content={tattoosText} className="retro-window" />
          </div>
          <div>
            <RetroWindow name="CONTACT ME" content={<FormTattoos />} className="retro-window tattoos-contact-form-margin-top" />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="https://docs.google.com/presentation/d/1e7-nOjk6b1IoDyf195gkKcJpvtyVpHbvtdj2XSKGO24/edit"
             target="_blank"
             className="catalog-link catalog-tattoos-link-margin">Ver Catálogo</a>
        </div>
        <div className="windows-layout-two justify-content-center mb-3">
          <div className="d-flex flex-column align-items-center">
            <RetroWindow name="Catalog Tattoos" content={"Tatto img"} className="retro-window catalog-margin-bottom" />
          </div>
          <div className="d-flex flex-column align-items-center catalog-tattoos-margin-top">
            <RetroWindow name="Catalog Tattoos" content={"Tatto img"} className="retro-window catalog-margin-bottom" />
          </div>
          <div className="d-flex flex-column align-items-center">
            <RetroWindow name="Catalog Tattoos" content={"Tatto img"} className="retro-window catalog-margin-bottom" />
          </div>
        </div>
      </div>
      <Botbar />
    </>
  )
}

import Topbar from "./navbars/Topbar.jsx";
import FormArts from "./forms/FormArts.jsx";
import RetroWindow from "./visuals/RetroWindow.jsx";
import Botbar from "./navbars/Botbar.jsx";

export default function VisualArts() {
  const trabalhoGraficoText = (
    <p>
      Inicialmente nomeado Aparições Digitais, a vertente gráfica do meu trabalho visual e plástico é uma tentativa de saturar e adormecer para confudir o globo ocular. <br />
      <br />
      Através da sobreposição e fragmentação de imagens que integram um acervo pessoal, mesclo imagens autorais e/ou outras produções visuais resultantes de uma pesquisa intencionada que busca elementos simbólicos da narrativa do meu trabalho, afim de sinalizar uma miragem opaca, sinuosa e à primeira vista irreconhecível. <br />
      <br />
      A escrita ou a imagem da palavra propulsiona um convite a um olhar mais atencioso e imersivo, mas serve principalmente como registro-rastro visual da minha produção literária. <br />
    </p>
  )

  const pinturaText = (
    <p>
      <br />
      abstração expr€ssionist4h<br />
      mineral afrossurealista<br />
      especulação plástica<br />
      natureza extra_humana? y/OU ante_humanO¿<br />
      >> paisagem antig r a&nbsp; v&nbsp; i&nbsp; t &nbsp; a &nbsp; c &nbsp; i &nbsp; o &nbsp;&nbsp;&nbsp;
          n &nbsp;&nbsp;&nbsp;&nbsp; a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; l<br />
        : and devices &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y gestos<br />
      for remembering &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; para lembrar<br />
      something<br />
      that maybe<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; de algo que<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [ talvez<br />
                                        <br />
      forgot<br />
      esquecemos///<br />
      <br />
      >>> sinuosas sombras trópicas do [ sul ]<br />
    </p>
  )

  const trabalhoGraficoUrl = (
    "https://docs.google.com/presentation/d/1H5JVyvyujqAO-C9vpy_ZOjAU3Z7uBW-uCl1AYLyizdU/edit?usp=sharing"
  )

  const pinturaUrl = (
    "https://docs.google.com/presentation/d/1r5_xlf9Puq6xdtVlw9AnUVXuQ6_puMUDZj3zeAQbdjw/edit?usp=sharing"
  )

  return (
    <>
      <Topbar />
      <div className="container">
        <div className="windows-layout-one justify-content-center mb-5">
          <div>
            <RetroWindow name="VISUAL" content={"img"} className="retro-window" />
          </div>
          <div className="d-flex flex-column align-items-center">
            <RetroWindow name="KÁTALOGØ GRÁPHICO" content={trabalhoGraficoText} className="retro-window catalog-margin-bottom" />
            <a href={trabalhoGraficoUrl}
               target="_blank"
               className="catalog-link catalog-link-margin-bottom">VER CATÁLOGO</a>
          </div>
        </div>
        <div className="windows-layout-one justify-content-center mb-3">
          <div className="d-flex flex-column align-items-center">
            <RetroWindow name="PINTURA" content={pinturaText} className="retro-window catalog-margin-bottom" />
            <a href={pinturaUrl} className="catalog-link catalog-link-margin-bottom">VER CATÁLOGO</a>
          </div>
          <div>
            <RetroWindow name="Contact Us" content={<FormArts />} className="retro-window" />
          </div>
        </div>
      </div>
      <Botbar />
    </>
  )
}

import {useEffect} from "react"

export default function LoadingBar() {

  useEffect(() => {
    const progressBar = document.getElementsByClassName('progress-bar')[0]
    setInterval(() => {
      const computedStyle = getComputedStyle(progressBar)
      const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
      progressBar.style.setProperty('--width', width + .1)
    }, 2);
    setTimeout(() => {
      window.open('https://www.instagram.com/techtonikah.tatu/');
    }, 4500);
  })


  return (
    <div className="progress-bar" style={{'--width': 0}} data-label=""></div>
  )
}

import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import Home from './components/Home'
import Tattoos from './components/Tattoos'
import VisualArts from "./components/VisualArts"
import About from "./components/About"
import Refs from "./components/Refs"
import Page404 from "./components/Page404"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tattoos" element={<Tattoos />}></Route>
          <Route path="/visual-arts" element={<VisualArts />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/refs" element={<Refs />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

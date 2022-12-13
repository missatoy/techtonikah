import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import './css/index.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Tattoos from './components/Tattoos'
import Prints from "./components/Prints"
import About from "./components/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/tattoos" element={<Tattoos />}></Route>
          <Route path="/prints" element={<Prints />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

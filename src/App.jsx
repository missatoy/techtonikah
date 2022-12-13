import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tattoos from './components/Tattoos'
import Prints from "./components/Prints"
import About from "./components/About"

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tattoos" element={<Tattoos />}></Route>
          <Route path="/prints" element={<Prints />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import Reac from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Produtos from "./Components/Produtos"
import Contato from "./Components/Contato"
import Header from "./Components/Header"
import "./App.css"
import ProdutoUnico from "./Components/ProdutoUnico"
import Footer from "./Components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="content">
            <Header></Header>
              <Routes>
                <Route index element={<Produtos/>}/>
                <Route path="contato" element={<Contato/>}/>
                <Route path="produto/:id" element={<ProdutoUnico/>}></Route>
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App

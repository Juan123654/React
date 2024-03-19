import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Prueba from "../src/componentes/Prueba.js";
import Menu from "../src/componentes/Menu.js";
import Registro from "../src/componentes/Registro.js";
import Home from "../src/componentes/Home.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />   
        <Routes>
          <Route path='/home' element={<Home /> } />
          <Route path='/registro' element={<Registro /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

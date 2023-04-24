import Navbar from "./Navbar";
import Tienda from "./pages/Tienda";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Eventos from "./pages/Eventos";
import Contacto from "./pages/Contacto";
import Ayuda from "./pages/Ayuda"
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ayuda" element={<Ayuda />} />
        </Routes>
      <Footer className="text-center"/>
    </>
  )
}

export default App

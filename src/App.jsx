import { Header } from "./components/features/Header/Header";
import { Portada } from "./components/features/Portada/Portada";
import { CuadroAmarillo } from "./components/features/CuadroAmarillo/CuadroAmarillo";
import { Tecnologias } from "./components/features/Tecnologias/Tecnologias";
import { SobreMi } from "./components/features/SobreMi/SobreMi";
import { Trabajos } from "./components/features/Trabajos/Trabajos";
import { Contacto } from "./components/features/Contacto/Contacto";
import { Footer } from "./components/features/Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Portada />
      <CuadroAmarillo />
      <Tecnologias />
      <SobreMi />
      <Trabajos />
      <Contacto />
      <Footer />
    </>
  );
};
import { Header } from "./components/features/Header/Header";
import { Portada } from "./components/features/Portada/Portada";
import { CuadroAmarillo } from "./components/features/CuadroAmarillo/CuadroAmarillo";
import { Tecnologias } from "./components/features/Separador/Tecnologías";
import { SobreMi } from "./components/features/SobreMi/SobreMi";

export const App = () => {
  return (
    <>
      <Header />
      <Portada />
      <CuadroAmarillo />
      <Tecnologias />
      <SobreMi />
    </>
  );
};
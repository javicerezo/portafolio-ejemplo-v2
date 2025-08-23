import { Header } from "./components/features/Header/Header";
import { Portada } from "./components/features/Portada/Portada";
import { CuadroAmarillo } from "./components/features/CuadroAmarillo/CuadroAmarillo";
import { Separador } from "./components/features/Separador/Separador";

export const App = () => {
  return (
    <>
      <Header />
      <Portada />
      <CuadroAmarillo />
      <Separador />
    </>
  );
};
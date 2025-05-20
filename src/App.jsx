import './App.css';
import { useState } from 'react';

import { Header } from './components/Header';
import { CuadroAmarillo } from './components/CuadroAmarillo';
import { Portada } from './components/Portada';
import { Separador } from './components/Separador';
import { SobreMi } from './components/SobreMi';
import { Trabajo } from './components/Trabajo';
import { Contacto } from './components/Contacto';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

import { dbTrabajos } from './data/dbTrabajos.js'
import { dbModal } from './data/dbModal.js'

export function App() {
  const [ trabajo, setTrabajo ] = useState([]);
  const [ modal, setModal ] = useState([]);


  useEffect( () => {
    setTrabajo(dbTrabajos)
    setModal(dbModal)
  }, [])


  return (
    <>

      <Header />

      <CuadroAmarillo />

      <Portada />

      <Separador />

      <SobreMi />

      <main className="c-trabajos o-container js-trabajos" id="c-trabajos">
          <h3 className="c-trabajos__h3">Mis<span> trabajos </span>web</h3>
          <h4 className="c-trabajos__h4">Una muestra de mis trabajos.</h4>
          <ul className="c-trabajos__ul js-trabajos__ul">
            {Object.values(trabajo).map( () => {

              return <p>desde lista de trabajos</p>
            })}
              <Trabajo />
          </ul>
      </main>

      <Contacto />

      <Modal />
      <div className="c-modal js-modal">
          <div className="c-modal__contenedor">
              <div className="c-modal__superior">
                  <p className="c-modal__url"><a href="#" target="_blank">PON LA URL DEL PROYECTO</a></p>
                  <i className="fa-solid fa-x"></i>
              </div>
              <h3 className="c-modal__titulo">titulo</h3>
              <div className="c-modal__img">
                  <img src="build/img/portafolio/cabin.png" loading="lazy" />
              </div>
              <div className="c-modal__inferior">
                  <p className="c-modal__parrafo"><span>Características: HTML, CSS, JavaScript</span></p>
                  <p>Descripcion: describe un poco el proyecto</p>
              </div>
          </div>
      </div>
      <div className="c-modal js-modal">
          <div className="c-modal__contenedor">
              <div className="c-modal__superior">
                  <p className="c-modal__url"><a href="#" target="_blank">PON LA URL DEL PROYECTO</a></p>
                  <i className="fa-solid fa-x"></i>
              </div>
              <h3 className="c-modal__titulo">titulo</h3>
              <div className="c-modal__img">
                  <img src="build/img/portafolio/cake.png" loading="lazy" />
              </div>
              <div className="c-modal__inferior">
                  <p className="c-modal__parrafo"><span>Características: HTML, CSS, JavaScript</span></p>
                  <p>Descripcion: describe un poco el proyecto</p>
              </div>
          </div>
      </div>
      <div className="c-modal js-modal">
          <div className="c-modal__contenedor">
              <div className="c-modal__superior">
                  <p className="c-modal__url"><a href="#" target="_blank">PON LA URL DEL PROYECTO</a></p>
                  <i className="fa-solid fa-x"></i>
              </div>
              <h3 className="c-modal__titulo">titulo</h3>
              <div className="c-modal__img">
                  <img src="build/img/portafolio/game.png" loading="lazy" />
              </div>
              <div className="c-modal__inferior">
                  <p className="c-modal__parrafo"><span>Características: HTML, CSS, JavaScript</span></p>
                  <p>Descripcion: describe un poco el proyecto</p>
              </div>
          </div>
      </div>
      <div className="c-modal js-modal">
          <div className="c-modal__contenedor">
              <div className="c-modal__superior">
                  <p className="c-modal__url"><a href="#" target="_blank">PON LA URL DEL PROYECTO</a></p>
                  <i className="fa-solid fa-x"></i>
              </div>
              <h3 className="c-modal__titulo">titulo</h3>
              <div className="c-modal__img">
                  <img src="build/img/portafolio/safe.png" loading="lazy" />
              </div>
              <div className="c-modal__inferior">
                  <p className="c-modal__parrafo"><span>Características: HTML, CSS, JavaScript</span></p>
                  <p>Descripcion: describe un poco el proyecto</p>
              </div>
          </div>
      </div>
      <div className="c-modal js-modal">
          <div className="c-modal__contenedor">
              <div className="c-modal__superior">
                  <p className="c-modal__url"><a href="#" target="_blank">PON LA URL DEL PROYECTO</a></p>
                  <i className="fa-solid fa-x"></i>
              </div>
              <h3 className="c-modal__titulo">titulo</h3>
              <div className="c-modal__img">
                  <img src="build/img/portafolio/circus.png" loading="lazy" />
              </div>
              <div className="c-modal__inferior">
                  <p className="c-modal__parrafo"><span>Características: HTML, CSS, JavaScript</span></p>
                  <p>Descripcion: describe un poco el proyecto</p>
              </div>
          </div>
      </div>

      <Footer />
    </>
  )
}


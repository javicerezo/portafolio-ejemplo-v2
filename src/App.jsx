import './App.css';
import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { CuadroAmarillo } from './components/CuadroAmarillo';
import { Portada } from './components/Portada';
import { Separador } from './components/Separador';
import { SobreMi } from './components/SobreMi';
import { Trabajo } from './components/Trabajo';
import { Contacto } from './components/Contacto';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';

import { dbTrabajos } from './data/dbTrabajos.js';
import { dbModal } from './data/dbModal.js';

export function App() {
    const [ listaTrabajos, setListaTrabajos ] = useState(dbTrabajos);
    const [ trabajo, setTrabajo ] = useState({});
    const [ listaModales, setListaModales ] = useState(dbModal);
    const [ modal, setModal ] = useState({});
    
    useEffect( () => {
        listaModales.map( obj => {
            if(obj.value === trabajo.value){
                obj.show = true;
                setModal(obj)
            }
        })
    });



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
                    {listaTrabajos.map( obj => 
                        <Trabajo 
                            key={obj.value}
                            obj={obj}
                            setTrabajo={setTrabajo}
                        />
                    )}
                </ul>
            </main>

            <Contacto />

            
            
            {modal.show ? <Modal key={modal.value} obj={modal} setTrabajo={setTrabajo} setModal={setModal}/> : null}
                
            

            <Footer />
        </>
    )
}


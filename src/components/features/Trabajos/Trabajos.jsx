import { Modal } from "../Modal/Modal";
import { Trabajo } from "./Trabajo";

import { useState, useEffect } from "react";

import { dbTrabajos } from "../../../data/dbTrabajos";
import { dbModal } from "../../../data/dbModal";

import './Trabajos.scss';

export const Trabajos = () => {
    const [ trabajo, setTrabajo ] = useState({});
    const [ modal, setModal ] = useState({});

    useEffect( () => {
        dbModal.map( obj => {
            if(obj.value === trabajo.value){
                obj.show = true;
                setModal(obj)
            }
        })
    }, [trabajo]);

    useEffect( () => {
        const cuadroModal = document.querySelector('.js-modal');
        if(cuadroModal != null) {
            cuadroModal.classList.add('Modal--show');
        }
    }, [modal]);

    return (
        <main className="Trabajos js-Trabajos" id="Trabajos">
            <h3 className="Trabajos-h3">Mis<span> trabajos </span>web</h3>
            <h4 className="Trabajos-h4">Una muestra de mis trabajos.</h4>
            <ul className="Trabajos-ul js-trabajos-ul">
                {dbTrabajos.map( obj => 
                    <Trabajo 
                        key={obj.value}
                        obj={obj}
                        setTrabajo={setTrabajo}
                    />
                )}
            </ul>

            {modal.show ? <Modal key={modal.value} obj={modal} setTrabajo={setTrabajo} setModal={setModal}/> : null}
        </main>
    );
}
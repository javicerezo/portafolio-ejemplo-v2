import { FaXmark } from "react-icons/fa6";

import './Modal.scss';
import { useState } from "react";

export const Modal = ({obj, setTrabajo, setModal}) => {
    const [ show, setShow ] = useState(false);      // LO CAMBIO CON SETTIMEOUT Y ALE
    const {image, tittle, url, caract, desc } = obj;

    setTimeout( () => ( setShow(true)), 500);

    const handleClick = () => {
        setShow(false);
        setTimeout( () => {
            setModal({});
            setTrabajo({});
        }, 500);
    };
    
    return (
        <div className={`Modal ${show ? "Modal--show" : ""}`}>
            <div className="Modal-contenedor">
                <div className="Modal-superior">
                    <p className="Modal-url"><a href={url} target="_blank">PON LA URL DEL PROYECTO</a></p>
                    <div><FaXmark onClick={handleClick} /></div>
                </div>
                <h3 className="Modal-titulo">{tittle}</h3>
                <div className="Modal-img">
                    <img src={image} loading="lazy"/>
                </div>
                <div className="Modal-inferior">
                    <p className="Modal-parrafo"><span>Características: {caract}</span></p>
                    <p>Descripcion: {desc}</p>
                </div>
            </div>
        </div>
    )
}
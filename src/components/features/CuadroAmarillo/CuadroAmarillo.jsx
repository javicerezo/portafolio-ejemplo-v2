import { useState } from 'react';

import { SiLinkedin, SiGithub  } from "react-icons/si";
import { BsCircleFill, BsCircle } from "react-icons/bs";

import './CuadroAmarillo.scss';

export function CuadroAmarillo () {
    const [positionScrollY, setPositionScrollY] = useState(false);
    
    window.addEventListener('scroll', () => {
        if(window.scrollY === 0) {
            setPositionScrollY(false);  
        } else {
            setPositionScrollY(true);
        }
    });

    return (
        <section className="CuadroAmarillo">
            <div className={`CuadroAmarillo-sup ${positionScrollY ? "CuadroAmarillo-sup--mod" : ""}`}></div>
            <div className={`CuadroAmarillo-der ${positionScrollY ? "CuadroAmarillo-der--mod" : ""}`}>
                <a href="#Portada"><BsCircle /></a>
                <a href="#SobreMi"><BsCircleFill /></a>
                <a href="#Trabajos"><BsCircleFill /></a>
                <a href="#Contacto"><BsCircleFill /></a>
            </div>
            <div className={`CuadroAmarillo-inf ${positionScrollY ? "CuadroAmarillo-inf--mod" : ""}`}>
                <p className={`CuadroAmarillo-p ${positionScrollY ? "CuadroAmarillo-p--mod" : ""}`}><span>-</span>Continúa, <a href="#Trabajos">QUIERO VER MÁS</a><span>-</span></p>
                <p className={`CuadroAmarillo-p ${positionScrollY ? "" : "CuadroAmarillo-p--mod"}`}><span>-</span>Subir al, <a href="#Portada">INICIO</a><span>-</span></p>
            </div>
            <div className={`CuadroAmarillo-izq ${positionScrollY ? "CuadroAmarillo-izq--mod" : ""}`}>
                <a href="https://www.linkedin.com/in/javicerezo/" target="_blanck"><SiLinkedin /></a>
                <a href="https://github.com/javicerezo/ejemplo-portafolio/" target="_blanck"><SiGithub /></a>
            </div>
        </section>
    );
};
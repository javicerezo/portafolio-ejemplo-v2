import { useEffect, useState } from "react";

import { FaSun, FaMoon, FaBars, FaXmark } from "react-icons/fa6";
import { SiLinkedin, SiGithub  } from "react-icons/si";
import  imgJC  from '@/assets/imgs/favicon-transp.png';

import './Header.scss';

export const Header = () => {
    const [ posScrollY, setPosScrollY ] = useState(false);
    const [ darkModeOn, setDarkModeOn ] = useState(false);
    const [ menuOn, setMenuOn ] = useState(false);

    window.addEventListener('scroll', () => {
        if(window.scrollY === 0) {
            setPosScrollY(false);  
        } else {
            setPosScrollY(true);
        }
    });

    useEffect( () => {
        const body = document.body;
        body.classList.toggle('darkMode');
    }, [darkModeOn]);

    return (
        <header className={`Header ${posScrollY ? "Header--mod" : ""}`}>
            <div className="Header-izquierda">
                <div className={`Header-darkMode ${darkModeOn ? "Header-darkMode--mod" : ""}`} onClick={ () => (setDarkModeOn(!darkModeOn)) }>
                    <img className={`Header-img ${darkModeOn ? "Header-img--mod" : ""}`} src={imgJC} alt="icono modo oscuro"/>
                    <span className="Header-span"><FaMoon /></span>
                    <span className="Header-span"><FaSun /></span>
                </div>
                <p className={`Header-autor ${posScrollY ? "Header-autor--mod" : ""}`}><a href="https://javicerezo.netlify.app/" target="_blank"> {`El Portafolio de < NombreApellidos />`}</a>
                </p>
            </div>
            <div className="Header-burger" onClick={ () => (setMenuOn(!menuOn)) }>
                {menuOn ? (<FaXmark  />) : (<FaBars  />)}
            </div>
            <ul className={`Header-nav ${menuOn ? "Header-nav--mod" : ""}`} >
                <li className="Header-li"><a className={`Header-a ${posScrollY ? "Header-a--mod" : ""}`} href="#SobreMi">SOBRE MÍ</a></li>
                <li className="Header-li"><a className={`Header-a ${posScrollY ? "Header-a--mod" : ""}`} href="#Trabajos">PORTAFOLIO</a></li>
                <li className="Header-li"><a className={`Header-a ${posScrollY ? "Header-a--mod" : ""}`} href="#Contacto">CONTACTO</a></li>
                <div className="Header-li">
                    <a className="Header-li-iconos" href="https://linkedin.com/in/javicerezoorellana" target="_blanck"><SiLinkedin /></a>
                    <a className="Header-li-iconos" href="https://github.com/javicerezo" target="_blanck"><SiGithub /></a>
                </div>
            </ul>
        </header>
    );
};
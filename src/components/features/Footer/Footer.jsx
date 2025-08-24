import { SiLinkedin, SiGithub  } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa6";
import './Footer.scss';

export const Footer = () => {
    return (
        <footer className="Footer">
            <p className="Footer-autor">Nombre Apellidos - <span>Frontend developer</span></p>
            <div className="Footer-sociales">
                <a href="https://linkedin.com/in/javicerezoorellana" target="_blanck"><SiLinkedin /></a>
                <a href="https://github.com/javicerezo" target="_blanck"><SiGithub /></a>
            </div>
            <div className="Footer-flecha">
                <a href="#Portada"><FaArrowUp /></a>
            </div>
        </footer>
    )
}
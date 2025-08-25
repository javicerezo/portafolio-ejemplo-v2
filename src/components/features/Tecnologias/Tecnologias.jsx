import { EfectoOlas } from "../../ui/EfectoOlas/EfectoOlas";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiPython,
  SiBootstrap,
  SiWordpress,
  SiGulp,
  SiGit,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";

import './Tecnologias.scss';

export const Tecnologias = () => {
    return (
        <div className="Tecnologias">
        <div className="Tecnologias-listado">
            <div className="Tecnologias-tarjeta">
                <h4 className="Tecnologias-titulo">Lenguajes programación</h4>
                <ul className="Tecnologias-ul">
                    <li className="Tecnologias-li">- HTML5 + CSS3</li>
                    <li className="Tecnologias-li">- JavaScript</li>
                    <li className="Tecnologias-li">- PHP</li>
                    <li className="Tecnologias-li">- MySQL</li>
                    <li className="Tecnologias-li">- Node js</li>
                    <li className="Tecnologias-li">- Python</li>
                </ul>
            </div>
            <div className="Tecnologias-tarjeta">
                <h4 className="Tecnologias-titulo">Framework & CMS's</h4>
                <ul className="Tecnologias-ul">
                    <li className="Tecnologias-li">- React js</li>
                    <li className="Tecnologias-li">- Jquery</li>
                    <li className="Tecnologias-li">- SASS</li>
                    <li className="Tecnologias-li">- Bootstrap 5</li>
                    <li className="Tecnologias-li">- Wordpress</li>
                    <li className="Tecnologias-li">- Django</li>
                </ul>
            </div>
            <div className="Tecnologias-tarjeta">
                <h4 className="Tecnologias-titulo">Otros complementos</h4>
                <ul className="Tecnologias-ul">
                    <li className="Tecnologias-li">- IndexedDb</li>
                    <li className="Tecnologias-li">- Gulp</li>
                    <li className="Tecnologias-li">- CRUD MySQL</li>
                    <li className="Tecnologias-li">- Testing</li>
                    <li className="Tecnologias-li">- Git + GitHub</li>
                    <li className="Tecnologias-li">- Patrones de diseño</li>
                </ul>
            </div>
        </div>
        <ul className="Tecnologias-iconos">
            <li className="Tecnologias-iconos-li"><SiHtml5 /></li>
            <li className="Tecnologias-iconos-li"><SiCss3 /></li>
            <li className="Tecnologias-iconos-li"><SiJavascript /></li>
            <li className="Tecnologias-iconos-li"><SiNodedotjs /></li>
            <li className="Tecnologias-iconos-li"><SiReact /></li>
            <li className="Tecnologias-iconos-li"><SiPython /></li>
            <li className="Tecnologias-iconos-li"><SiBootstrap /></li>
            <li className="Tecnologias-iconos-li"><SiWordpress /></li>
            <li className="Tecnologias-iconos-li"><SiGulp /></li>
            <li className="Tecnologias-iconos-li"><SiGit /></li>
            <li className="Tecnologias-iconos-li"><FaDatabase /></li>
        </ul>

        <EfectoOlas />
    </div>
    );
};
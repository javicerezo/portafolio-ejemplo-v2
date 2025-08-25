import { FaPlus } from "react-icons/fa6";

import './Trabajo.scss';

export function Trabajo ({obj, setTrabajo}) {
    const { value, image } = obj;

    return (
        <li className="Trabajo" onClick={ () => ( setTrabajo(obj) )}>
            <img className="Trabajo-img1" loading="lazy" 
            src={image} alt="imagen portafolio"
            value={value}/>
            <span className="Trabajo-img2"><FaPlus /></span>
        </li>
    )
}
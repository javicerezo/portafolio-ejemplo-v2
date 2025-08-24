import './Trabajo.scss';

export function Trabajo ({obj, setTrabajo}) {
    const { value, image } = obj;
    
    // const handleClick = () => {
    //     setTrabajo(obj)
    // }

    return (
        <li className="Trabajo-li" onClick={ () => ( setTrabajo(obj) )}>
            <img className="Trabajo-img1" loading="lazy" 
            src={image} alt="imagen portafolio"
            value={value}/>
            <span className="Trabajo-img2"><i className="fas fa-plus fa-3x"></i></span>
        </li>
    )
}
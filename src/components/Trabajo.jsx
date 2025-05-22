
export function Trabajo ({obj, setTrabajo}) {
    const { value, image } = obj;
    
    const handleClick = () => {
        setTrabajo(obj)
    }

    return (
        <li className="c-trabajos__li" onClick={handleClick}>
            <img className="c-trabajos__img1" loading="lazy" 
            src={image} alt="imagen portafolio"
            value={value}/>
            <span className="c-trabajos__img2"><i className="fas fa-plus fa-3x"></i></span>
        </li>
    )
}
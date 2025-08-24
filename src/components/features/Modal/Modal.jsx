import './Modal.scss';

export const Modal = ({obj, setTrabajo, setModal}) => {
    const {image, tittle, url, caract, desc } = obj;

    const handleClick = () => {
        setModal({});
        setTrabajo({});
    }
    
    return (
        <div className="Modal js-modal">
            <div className="Modal-contenedor">
                <div className="Modal-superior">
                    <p className="Modal-url"><a href={url} target="_blank">PON LA URL DEL PROYECTO</a></p>
                    <i className="fa-solid fa-x" onClick={handleClick}></i>
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
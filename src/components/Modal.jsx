export function Modal ({obj, setTrabajo, setModal}) {
    const {image, tittle, url, caract, desc } = obj;

    
    
    const handleClick = () => {
        setModal({});
        setTrabajo({});
    }

    return (
        <div className="c-modal js-modal">
            <div className="c-modal__contenedor">
                <div className="c-modal__superior">
                    <p className="c-modal__url"><a href={url} target="_blank">PON LA URL DEL PROYECTO</a></p>
                    <i className="fa-solid fa-x" onClick={handleClick}></i>
                </div>
                <h3 className="c-modal__titulo">{tittle}</h3>
                <div className="c-modal__img">
                    <img src={image} loading="lazy"/>
                </div>
                <div className="c-modal__inferior">
                    <p className="c-modal__parrafo"><span>Características: {caract}</span></p>
                    <p>Descripcion: {desc}</p>
                </div>
            </div>
        </div>
    )
}
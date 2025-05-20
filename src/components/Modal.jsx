export function Modal () {
    return (
        <div className="c-modal js-modal">
            <div className="c-modal__contenedor">
                <div className="c-modal__superior">
                    <p className="c-modal__url"><a href="https://www.google.com" target="_blank">PON LA URL DEL PROYECTO</a></p>
                    <i className="fa-solid fa-x"></i>
                </div>
                <h3 className="c-modal__titulo">titulo</h3>
                <div className="c-modal__img">
                    <img src="public/img/portafolio/submarine.png" loading="lazy"/>
                </div>
                <div className="c-modal__inferior">
                    <p className="c-modal__parrafo"><span>Características: HTML, CSS, JavaScript</span></p>
                    <p>Descripcion: describe un poco el proyecto</p>
                </div>
            </div>
        </div>
    )
}
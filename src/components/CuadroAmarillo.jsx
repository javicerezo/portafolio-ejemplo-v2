export function CuadroAmarillo () {
    return (
        <section className="c-cuadro js-cuadro">
            <div className="c-cuadro__sup"></div>
            <div className="c-cuadro__der">
                <a href="#c-portada"><i className="fa-regular fa-circle"></i></a>
                <a href="#c-sobre-mi"><i className="fa-solid fa-circle"></i></a>
                <a href="#c-trabajos"><i className="fa-solid fa-circle"></i></a>
                <a href="#c-contacto"><i className="fa-solid fa-circle"></i></a>
            </div>
            <div className="c-cuadro__inf">
                <p className="c-cuadro__p"><span>-</span>Continúa, <a href="#c-trabajos">QUIERO VER MÁS</a><span>-</span></p>
                <p className="c-cuadro__p c-cuadro__p--mod"><span>-</span>Subir al, <a href="#c-portada">INICIO</a><span>-</span></p>
            </div>
            <div className="c-cuadro__izq">
                <a href="https://www.linkedin.com/in/javicerezo/" target="_blanck"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/javicerezo/ejemplo-portafolio/" target="_blanck"><i className="fa-brands fa-github"></i></a>
            </div>
        </section>
    )
}
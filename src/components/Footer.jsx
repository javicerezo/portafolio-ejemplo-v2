export function Footer() {
    return (
        <footer className="c-footer o-container">
            <p className="c-footer__autor">Nombre Apellidos - <span>Frontend developer</span></p>
            <div className="c-footer__sociales">
                <a href="https://linkedin.com/in/javicerezoorellana" target="_blanck"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/javicerezo" target="_blanck"><i className="fa-brands fa-github"></i></a>
            </div>
            <div className="c-footer__flecha">
                <a href="#c-portada"><i className="fa-solid fa-arrow-up"></i></a>
            </div>
        </footer>
    )
}
export function Contacto() {
    return (
        <section className="c-contacto o-container js-contacto" id="c-contacto">
            <div className="c-contacto__formulario">
                <div className="c-contacto__datos">
                    <h3 className="c-contacto__h3">Contacto</h3>
                    <ul>
                        <li className="c-contacto__li"><i className="fa-solid fa-phone-flip"></i>Telf: 123456789</li>
                        <li className="c-contacto__li"><i className="fa-solid fa-envelope"></i>E-mail: hola@correo.com</li>
                        <li className="c-contacto__li"><i className="fa-solid fa-clock"></i>Horario: 8:00 - 17:00</li>
                    </ul>
                    <div className="c-contacto__sociales">
                        <a href="https://linkedin.com/in/javicerezoorellana" target="_blanck"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/javicerezo" target="_blanck"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <form className="c-contacto__inputs" id="formulario">
                    <input id="nombre" name="nombre" type="text" placeholder="NOMBRE" />
                    <input id="correo" name="correo" type="email" placeholder="EMAIL" />
                    <textarea id="asunto" name="asunto" placeholder="ASUNTO"></textarea>
                    <button className="c-contacto__btn js-contacto__btn o-button o-button--amarillo" id="btn-enviar" type="submit">Enviar</button>
                </form>
            </div>
            <div className="c-contacto__respuesta">
                <div className="spinner u-display--none" id="spinner">
                    <div className="sk-chase">
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                    </div>
                </div>
                <div className="mensaje" id="mensaje"></div>
            </div>
        </section>
    )
}
import { useEffect, useState } from "react";
import { deshabilitar, habilitar, comprobarCorreo, imprimirAlerta, 
        resetFormulario } from "../funciones";

export function Contacto() {
    const [objCorreo, setObjCorreo] = useState({nombre: '', correo:'', asunto: ''});
    const [enviarCorreo, setEnviarCorreo] = useState(false);

    const handleInputNombre = e => {
        let infoCorreo = objCorreo;
        infoCorreo.nombre = e.target.value.trim();
        setObjCorreo(infoCorreo);
        comprobarInputs(objCorreo)
    }
    const handleInputCorreo = e => {
        let infoCorreo = objCorreo;
        infoCorreo.correo = e.target.value.trim();
        setObjCorreo(infoCorreo);
        comprobarInputs(objCorreo)
    }
    const handleInputAsunto = e => {
        let infoCorreo = objCorreo;
        infoCorreo.asunto = e.target.value.trim();
        setObjCorreo(infoCorreo);
        comprobarInputs(objCorreo)
    }

    function comprobarInputs (obj) {
        if(obj.nombre !== '' && obj.correo !== '' && obj.asunto !== '') {
            setEnviarCorreo(true)
        } else {
            setEnviarCorreo(false)
        }
    }

    const handleEnviarCorreo = e => {
        e.preventDefault();
        const mensaje = document.querySelector('#mensaje');
        const spinner = document.querySelector('.spinner');
        const formulario = document.querySelector('#formulario');

        let correcto = comprobarCorreo(objCorreo.correo);
        if(correcto) {
            spinner.classList.remove('u-display--none');
            const resetCorreo = {
                nombre: '',
                correo: '',
                asunto: ''
            }
            setObjCorreo(resetCorreo);
            setEnviarCorreo(false);
            setTimeout(() => {
                spinner.classList.add('u-display--none');
                imprimirAlerta(mensaje, 'exito', 'Mensaje enviado correctamente');
                resetFormulario(formulario);
            }, 3000);
        } else {
            imprimirAlerta(mensaje, 'error', 'El correo no es correcto');
        }
    }

    useEffect( () => {
        const btnEnviarCorreo = document.querySelector('.js-contacto__btn');
        enviarCorreo === false ? deshabilitar(btnEnviarCorreo) : habilitar(btnEnviarCorreo); 
    }, [enviarCorreo]);

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
                    <input id="nombre" name="nombre" type="text" placeholder="NOMBRE" onInput={handleInputNombre}/>
                    <input id="correo" name="correo" type="email" placeholder="EMAIL" onChange={handleInputCorreo}/>
                    <textarea id="asunto" name="asunto" placeholder="ASUNTO" onChange={handleInputAsunto}></textarea>
                    <button className="c-contacto__btn js-contacto__btn o-button o-button--amarillo" 
                    id="btn-enviar" type="submit" onClick={handleEnviarCorreo}>Enviar</button>
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
(function (){
    // VARIABLES
    const body = document.querySelector('.js-body');
    const header = document.querySelector('.js-header');
    const cuadro = document.querySelector('.js-cuadro');
    const btnDarkmode = document.querySelector('.js-header__dark-mode');
    const btnBurger = document.querySelector('.js-header__burger i');
    const listaTrabajos = document.querySelector('.js-trabajos__ul');
    const listaModales = document.querySelectorAll('.js-modal');
    const btnEnviarCorreo = document.querySelector('#btn-enviar');
    const nombreInput = document.querySelector('#nombre');
    const correoinput = document.querySelector('#correo');
    const asuntoinput = document.querySelector('#asunto');
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    const mensaje = document. querySelector('#mensaje');
    const spinner = document. querySelector('.spinner');
    const formulario = document. querySelector('#formulario');

    //DUPLICO LAS LETRAS DEL H3-CONTACTO PARA LA ANIMACIÓN
    const contacto = document.querySelector('.c-contacto__h3');
    const letrasContacto = contacto.textContent.split("");
    contacto.innerText = ''; //hago contacto que sea vacío
    letrasContacto.forEach( (letra) => {
        contacto.innerHTML = contacto.innerHTML + `
            <div>
                <span>${letra}</span>
                <span class="segunda-linea">${letra}</span>
            </div>
        `; //recorro cada letra de contacto y la duplico
    });

    // OBJ correo para hacer las validaciones
    let infoCorreo = {
        nombre: '',
        correo: '',
        asunto: ''
    }

    // EVENTOS SCROLL
    window.addEventListener('DOMContentLoaded', () => {
        darkMode();
        deshabilitar(btnEnviarCorreo);
        animacionLetras(contacto);
    }); 

    //posiciones del cuadro amarillo y del header
    window.addEventListener('scroll', () => {
        if(window.scrollY == '0') {
            cuadro.children[0].classList.remove('c-cuadro__sup--mod');
            cuadro.children[1].classList.remove('c-cuadro__der--mod');
            cuadro.children[2].classList.remove('c-cuadro__inf--mod');
            cuadro.children[3].classList.remove('c-cuadro__izq--mod');

            header.classList.remove('c-header--mod');

            cuadro.children[2].children[0].classList.remove('c-cuadro__p--mod');
            cuadro.children[2].children[1].classList.add('c-cuadro__p--mod');
        } else {
            cuadro.children[0].classList.add('c-cuadro__sup--mod');
            cuadro.children[1].classList.add('c-cuadro__der--mod');
            cuadro.children[2].classList.add('c-cuadro__inf--mod');
            cuadro.children[3].classList.add('c-cuadro__izq--mod');
            
            header.classList.add('c-header--mod');
            
            cuadro.children[2].children[0].classList.add('c-cuadro__p--mod');
            cuadro.children[2].children[1].classList.remove('c-cuadro__p--mod');
        }
    })
// EVENTOS DE CLICK
    // cambio a modo oscuro
    btnDarkmode.addEventListener('click', () => {
        body.classList.toggle('darkmode');
    });
    //boton menu mobile
    btnBurger.addEventListener('click', () => {
        header.children[2].classList.toggle('c-header__nav--mod');
        btnBurger.classList.toggle('fa-xmark');
        btnBurger.classList.toggle('fa-bars');
    });
    // botones modales
    listaTrabajos.addEventListener('click', (e) => {
        let i = parseInt(e.target.getAttribute('value'));
        abrirModal(i);
        listaModales[i].addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target.classList.contains('fa-solid')){
                cerrarModal(i);
            }
            if(e.target.classList.contains('js-modal')){
                cerrarModal(i);
            }
        })
    });
    // Inputs del correo
    nombreInput.addEventListener('input', e => {
        rellenarinput(infoCorreo, e);
        let correcto = comprobarInput(infoCorreo);
        if(correcto) {
            habilitar(btnEnviarCorreo);
        } else {
            deshabilitar(btnEnviarCorreo);
        }
    });
    correoinput.addEventListener('input', e => {
        rellenarinput(infoCorreo, e);
        let correcto = comprobarInput(infoCorreo);
        if(correcto) {
            habilitar(btnEnviarCorreo);
        } else {
            deshabilitar(btnEnviarCorreo);
        }
    });
    asuntoinput.addEventListener('input', e => {
        rellenarinput(infoCorreo, e);
        let correcto = comprobarInput(infoCorreo);
        if(correcto) {
            habilitar(btnEnviarCorreo);
        } else {
            deshabilitar(btnEnviarCorreo);
        }
    });
    btnEnviarCorreo.addEventListener('click', e => {
        e.preventDefault();
        let correcto = comprobarCorreo(infoCorreo.correo);
        if(correcto) {
            spinner.classList.remove('u-display--none');
            deshabilitar(btnEnviarCorreo);
            setTimeout(() => {
                spinner.classList.add('u-display--none');
                imprimirAlerta(mensaje, 'exito', 'Mensaje enviado correctamente');
                resetInputs(infoCorreo);
                resetFormulario(formulario);
            }, 3000);
        } else {
            imprimirAlerta(mensaje, 'error', 'El correo no es correcto');
        }
    })

    // FUNCIONES 
    /* función que detecta el modo oscuro de las preferencias del usuario y añade la clase darkmode al body para 
    poder cambiar imagenes de fondo, también está pendiente al cambio manual de las preferencias para hacer el cambio */
    function darkMode() {
        const consulta = window.matchMedia('(prefers-color-scheme: dark)');
        if (consulta.matches) {
            document.body.classList.add('darkmode');
        } else {
            document.body.classList.remove('darkmode');
        }
        consulta.addEventListener('change', () => {
            if (consulta.matches) {
                document.body.classList.add('darkmode');
            } else {
                document.body.classList.remove('darkmode');
            }
        })
    };
    function abrirModal (i) {
        listaModales[i].classList.add('c-modal--show'); 
    };
    function cerrarModal (i) {
        listaModales[i].classList.remove('c-modal--show');
    };
    function habilitar (contenedor) {
        // Habilitamos el uso de un botón
        contenedor.classList.remove('u-cursor--not-allowed','u-opacity--50');
        contenedor.disabled = false;
    };
    function deshabilitar (contenedor) {
        // Deshabilitamos el uso de un botón
        contenedor.classList.add('u-cursor--not-allowed','u-opacity--50');
        contenedor.disabled = true;
    };
    function rellenarinput (objComentario, e) {
        objComentario[e.target.name] = e.target.value.trim();
    };
    
    function comprobarInput (objComentario) {
        if(objComentario.nombre != '' && objComentario.correo != '' && objComentario.asunto != '') {
            return true;
        } else {
            return false;
        }
    }
    function comprobarCorreo (email) {
        // validamos email con Email Regex
        let correcto = false;
        if (!er.test(email)){
            return correcto;
        } else {
            correcto = true;
            return correcto;
        }
    };

    function limpiarHTML (contenedor) {
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    };

    function imprimirAlerta (contenedorMensaje, tipo, mensaje) {
        if(contenedorMensaje.childElementCount === 0) {
            const p = document.createElement('p');
            p.classList.add('u-mensaje');
            p.textContent = mensaje;
            if (tipo === 'exito') {
                p.classList.add(`u-mensaje--${tipo}`);
            }
            if (tipo === 'error') {
                p.classList.add(`u-mensaje--${tipo}`);
            }
            if (tipo === 'alerta') {
                p.classList.add(`u-mensaje--${tipo}`);
            }
            contenedorMensaje.appendChild(p);
            if (contenedorMensaje.classList.contains('c-buscador__ul-buscar') == false ) {
                setTimeout(() => {
                    limpiarHTML(contenedorMensaje);
                }, 3000);
            }
        }
    }
    function resetInputs(objComentario) {
        objComentario.nombre = '';
        objComentario.correo = '';
        objComentario.asunto = '';
    };
    
    function resetFormulario (formulario){
        setTimeout(() => {
            formulario.reset();
        }, 3000);
    };

    function animacionLetras (titulo) {
        setInterval( () => {
            let cuenta = 0;
            const intervalo = setInterval(() => {
                if (cuenta < titulo.children.length) {
                    titulo.children[cuenta].classList.add('animacion')
                    cuenta++;
                } else {
                    clearInterval(intervalo);
                }
            }, 100);
        }, 3000);
        setInterval( () => {
            let cuenta = 0;
            const intervalo = setInterval(() => {
                if (cuenta < titulo.children.length) {
                    titulo.children[cuenta].classList.remove('animacion')
                    cuenta++;
                } else {
                    clearInterval(intervalo);
                }
            }, 100);
        }, 3150);
    }
})();
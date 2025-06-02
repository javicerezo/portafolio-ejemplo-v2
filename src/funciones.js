
export function habilitar (contenedor) {
    // Habilitamos el uso de un botón
    contenedor.classList.remove('u-cursor--not-allowed','u-opacity--50');
    contenedor.disabled = false;
}
export function deshabilitar (contenedor) {
    // Deshabilitamos el uso de un botón
    contenedor.classList.add('u-cursor--not-allowed','u-opacity--50');
    contenedor.disabled = true;
}
export function rellenarinput (objComentario, e) {
    objComentario[e.target.name] = e.target.value.trim();
}

export function comprobarCorreo (email) {
    const er = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    // validamos email con Email Regex
    let correcto = false;
    if (!er.test(email)){
        return correcto;
    } else {
        correcto = true;
        return correcto;
    }
}

export function limpiarHTML (contenedor) {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

export function imprimirAlerta (contenedorMensaje, tipo, mensaje) {
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

export function resetFormulario (formulario){
    setTimeout(() => {
        formulario.reset();
    }, 3000);
}

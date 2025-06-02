import { useState, useEffect } from 'react';

export function CuadroAmarillo () {
    const [positionScrollY, setPositionScrollY] = useState(false);
    
    window.addEventListener('scroll', () => {
        if(window.scrollY === 0) {
            setPositionScrollY(false);  
        } else {
            setPositionScrollY(true);
        }
    });

    useEffect ( () => {
        const cuadro = document.querySelector('.js-cuadro');
        const header = document.querySelector('.js-header');

        if(positionScrollY) {
            cuadro.children[0].classList.add('c-cuadro__sup--mod');
            cuadro.children[1].classList.add('c-cuadro__der--mod');
            cuadro.children[2].classList.add('c-cuadro__inf--mod');
            cuadro.children[3].classList.add('c-cuadro__izq--mod');
            
            header.classList.add('c-header--mod');
            
            cuadro.children[2].children[0].classList.add('c-cuadro__p--mod');
            cuadro.children[2].children[1].classList.remove('c-cuadro__p--mod');   
        } else {
            if(cuadro.children[0].classList.contains('c-cuadro__sup--mod')){
                cuadro.children[0].classList.remove('c-cuadro__sup--mod');
                cuadro.children[1].classList.remove('c-cuadro__der--mod');
                cuadro.children[2].classList.remove('c-cuadro__inf--mod');
                cuadro.children[3].classList.remove('c-cuadro__izq--mod');
                
                header.classList.remove('c-header--mod');
                
                cuadro.children[2].children[0].classList.remove('c-cuadro__p--mod');
                cuadro.children[2].children[1].classList.add('c-cuadro__p--mod');
            }
            
        }
    })

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
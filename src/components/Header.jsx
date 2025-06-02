
export function Header () {
    const handleDarKMode = () => {
        const body = document.querySelector('.js-body');
        body.classList.toggle('darkmode');
    }
    const handleBurgerBar = () => {
        const nav = document.querySelector('.c-header__nav');
        const iconBurger = document.querySelector('.js-header__burger i');
        nav.classList.toggle('c-header__nav--mod');
        iconBurger.classList.toggle('fa-bars');
        iconBurger.classList.toggle('fa-xmark');
    }

    return (
        <header className="c-header o-container js-header">
            <div className="c-header__izquierda">
                <div className="c-header__dark-mode js-header__dark-mode" onClick={handleDarKMode}>
                    <div className="c-header__img">
                        <img src="public/favicon-transp.png" alt="icono modo oscuro"/>
                    </div>
                    <span className="c-header__span"><i className="fa-solid fa-moon"></i></span>
                    <span className="c-header__span"><i className="fa-solid fa-sun"></i></span>
                </div>
                <p className="c-header__autor"><a href="https://javicerezo.netlify.app/" target="_blank"> El Portafolio de NombreApellidos</a>
                </p>
            </div>
            <div className="c-header__burger js-header__burger" >
                <input type="checkbox" id="check__menu"/>
                <label className="c-header__burger-icono" htmlFor="check__menu">
                    <i className="fa-solid fa-bars" onClick={handleBurgerBar}></i>
                </label>
            </div>
            <ul className="c-header__nav">
                <li className="c-header__li"><a className="c-header__a" href="#c-sobre-mi">SOBRE MÍ</a></li>
                <li className="c-header__li"><a className="c-header__a" href="#c-trabajos">PORTAFOLIO</a></li>
                <li className="c-header__li"><a className="c-header__a" href="#c-contacto">CONTACTO</a></li>
                <div className="c-header__li">
                    <a className="c-header__li-iconos" href="https://linkedin.com/in/javicerezoorellana" target="_blanck"><i className="fa-brands fa-linkedin"></i></a>
                    <a className="c-header__li-iconos" href="https://github.com/javicerezo" target="_blanck"><i className="fa-brands fa-github"></i></a>
                </div>
            </ul>
        </header>
    )
}
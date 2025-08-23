import './Header.scss';

export const Header = () => {
    const handleDarKMode = () => {
        const body = document.querySelector('.js-body');
        body.classList.toggle('darkmode');
    }
    const handleBurgerBar = () => {
        const nav = document.querySelector('.Header-nav');
        const iconBurger = document.querySelector('.js-header-burger i');
        nav.classList.toggle('c-header-nav--mod');
        iconBurger.classList.toggle('fa-bars');
        iconBurger.classList.toggle('fa-xmark');
    }

    return (
        <header className="Header o-container js-header">
            <div className="Header-izquierda">
                <div className="Header-dark-mode js-header-dark-mode" onClick={handleDarKMode}>
                    <div className="Header-img">
                        <img src="public/favicon-transp.png" alt="icono modo oscuro"/>
                    </div>
                    <span className="Header-span"><i className="fa-solid fa-moon"></i></span>
                    <span className="Header-span"><i className="fa-solid fa-sun"></i></span>
                </div>
                <p className="Header-autor"><a href="https://javicerezo.netlify.app/" target="_blank"> El Portafolio de NombreApellidos</a>
                </p>
            </div>
            <div className="Header-burger js-header-burger" >
                <input type="checkbox" id="check-menu"/>
                <label className="Header-burger-icono" htmlFor="check-menu">
                    <i className="fa-solid fa-bars" onClick={handleBurgerBar}></i>
                </label>
            </div>
            <ul className="Header-nav">
                <li className="Header-li"><a className="Header-a" href="#SobreMi">SOBRE MÍ</a></li>
                <li className="Header-li"><a className="Header-a" href="#Trabajos">PORTAFOLIO</a></li>
                <li className="Header-li"><a className="Header-a" href="#Contacto">CONTACTO</a></li>
                <div className="Header-li">
                    <a className="Header-li-iconos" href="https://linkedin.com/in/javicerezoorellana" target="_blanck"><i className="fa-brands fa-linkedin"></i></a>
                    <a className="Header-li-iconos" href="https://github.com/javicerezo" target="_blanck"><i className="fa-brands fa-github"></i></a>
                </div>
            </ul>
        </header>
    );
};
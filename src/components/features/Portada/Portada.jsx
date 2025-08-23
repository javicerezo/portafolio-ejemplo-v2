import { Button } from '../../ui/Button/Button';
import './Portada.scss';

export function Portada () {
    return (
        <section className="Portada js-portada" id="Portada">
            <div className="Portada-contanier">
                <h1 className="Portada-h1">
                    Nombre Apellidos 
                </h1>
                <h2 className="Portada-h2"> - DESARROLLADOR WEB - </h2>
                <div className="Portada-button">
                    <Button />
                </div>
            </div>
        </section>
    )
}
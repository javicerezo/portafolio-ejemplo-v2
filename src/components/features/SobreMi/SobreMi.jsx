import { Button } from '../../ui/Button/Button';
import './SobreMi.scss';

export const SobreMi = () => {
    return (
        <section className="SobreMi">
            <h3 className="SobreMi-h3">Sobre<span> mí </span></h3>
            <h4 className="SobreMi-h4">Frontend developer.</h4>
            <div className="SobreMi-descripcion">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea nihil repudiandae sapiente eligendi? Nam amet, in eligendi veniam quo corporis eaque necessitatibus, labore a culpa magni repellendus aut nobis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ea!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero molestiae ipsum, culpa, maxime labore numquam excepturi eum voluptas minima quasi laboriosam voluptatibus dignissimos ea est illum et nihil alias!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempora esse est vero eveniet adipisci.</p>
            </div>
            {/* <a className="SobreMi-a o-button o-button--amarillo" href="#" target="_blank">Ver Cv</a> */}
            <Button 
                clases="SobreMi-a Button Button--amarillo"
                href={"#"}
                texto={"Ver CV"}/>
        </section>
    );
};
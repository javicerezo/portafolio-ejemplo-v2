import './Button.scss';

export const Button = ({clases, enlace = "#", texto}) => {
    return (
        <a className={clases} href={enlace}>{texto}</a>
    );
};
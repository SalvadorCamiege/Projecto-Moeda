import style from './Button.module.css';
import { Link } from 'react-router-dom';

function Button() {
    return (
        <Link className={style.sobre_button}>
            Começar
        </Link>
    );
}

export default Button;
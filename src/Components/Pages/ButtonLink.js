import { Link } from 'react-router-dom';
import style from './ButtonLink.module.css';

function ButtonLink({ to, text }) {
    return (
        <Link className={style.sobre_button} to={to}>
            {text}
        </Link>
    );
}

export default ButtonLink;
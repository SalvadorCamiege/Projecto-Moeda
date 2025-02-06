import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../img/logo.svg';

import Container from './Container';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.NavBar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>

                {/* Botão Menu Hamburguer */}
                <button 
                    className={styles.menuToggle} 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Classe dinâmica para esconder/mostrar o menu */}
                <ul className={`${styles.list} ${menuOpen ? styles.show : ''}`}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/intercambio">Intercâmbio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/caracteristicas">Características</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/perguntasfrequentes">Perguntas Frequentes</Link>
                    </li>
                    <li className={styles.item}>
                        <Link className={styles.itemCarteira} to="/conectarcarteira">Conectar Carteira</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default NavBar;

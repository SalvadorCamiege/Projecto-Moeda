import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import styles from './Rodape.module.css';
import logo from '../../img/logo.svg';

function Rodape() {
    return (
        <footer className={styles.footer}>
            <h1>
                <img src={logo} alt="Logo" />
            </h1> 
            <ul className={styles.social_list}>
                <li><a href="https://www.facebook.com/salvadorcamiege.sc/" target='black'><FaFacebook /></a></li>
                <li><a href="https://www.linkedin.com/in/salvador-camiege-564b16288/" target='black'><FaLinkedin /></a></li>
                <li><a href="https://github.com/SalvadorCamiege" target='black'><FaInstagram /></a></li>
                <li><a href="https://github.com/SalvadorCamiege" target='black'><FaGithub /></a></li>
            </ul>
            <p className={styles.paragrafo}>Site Desenvolvido por salvador Camiege, visite as minhas redes sociais.</p>
        </footer>
    );
}

export default Rodape;
import styles from './Carteira.module.css';
import ButtonLink from './ButtonLink';

function Carteira(){
    return(
        <section className={styles.section_0}>
            <div className={styles.section_1}>
                 <h1 className={styles.section_1_h1}>Uma maneira simples e segura de comprar
                 e vender criptomoedas</h1>
                 <p  className={styles.section_1_p}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressão. Lorem Ipsum <br/>
                 tem sido a indústria</p>
                 <ButtonLink to="/conectarcarteira" text="Conectar Carteira"/>
            </div>
        </section>
    )
}

export default Carteira;
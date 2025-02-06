import styles from './Home.module.css';
import Button from './Button'
import img from '../../img/telefony.png';
import Girausel from '../carousel/Girausel'; // Certifique-se de que este caminho está correto!
import Quadro from '../Tables/Quadro';

import Intercambio from './Intercambio';
import Caracteristicas from './Caracteristicas';
import Carteira from './Carteira';
import NoteBook from './NoteBook';
import PerguntasFrequentes from './PerguntasFrequentes';

function Home() {
    return (
        <>
            {/* Primeira seção */}
            <section className={styles.text_home}>
                <div>
                    <h1 className={styles.titulo}>
                        Compra, Venda e <br />
                        aceite ativos digitais
                    </h1>
                    <p className={styles.paragrafo}>
                        Lorem Ipsum is simply dummy text of the printing and <br />
                        typesetting industry. Lorem Ipsum has been the industry <br />
                        standard dummy text ever since the 1500s
                    </p>
                    <div className={styles.button}>
                        <Button/>
                    </div>
                </div>
                <div className={styles.img}>
                    <img className={styles.img_img} src={img} alt="telefone" />
                </div>
            </section>

            {/* Segunda seção */}
            <section>
                <Girausel />
            </section>
            
            {/* Terceira seção */}
            <section>
                <Quadro />
            </section>

            {/* Quarta seção */}
            <section>
                <Intercambio />
            </section>

             {/* Quinta seção */}
             <section>
                <Caracteristicas />
            </section>

             {/* Sexta seção */}
             <section>
                <Carteira />
            </section>

             {/* setima seção */}
             <section>
                <NoteBook />
            </section>

              {/* oitava seção */}
              <section>
                <PerguntasFrequentes />
            </section>

        </>
    );
}

export default Home;
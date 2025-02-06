import styles from './Quadro.module.css';
import icon from '../../img/Work/icon-one.svg';
import icon2 from '../../img/Work/icon-two.svg';
import icon3 from '../../img/Work/icon-three.svg';
import bg  from '../../img/Work/bg-arrow.svg';

function Quadro() {
    return(
        <section>  
             <h1 className={styles.Parte_1_h1}>Como Funciona</h1>
             <p className={styles.Parte_1_p}>Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. <br/>
             Lorem Ipsum tem sido o texto modelo padrão da indústria de todos os tempos.</p>
             <div className={styles.Parte_11}> 
                  {/* primeira seção */}
                    <div className={styles.Quadro}>
                        <div className={styles.img_tt}>
                            <img src={icon} alt="principal" />
                        </div>
                        
                        <img src={bg} alt="Icon1" />
                        <h2 className={styles.Parte_1_h2}>Criar Conta</h2>
                        <p className={styles.Parte_2_p}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressão. Lorem Ipsum tem sido a indústria e esta
                        texto padrão fictício desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu...   </p>
                    </div>

                    {/* Segunda seção */}
                    <div className={styles.Quadro}>
                        <div className={styles.img_tt}>
                            <img src={icon2} alt="principal" />
                        </div>
                       
                        <img src={bg} alt="Icon1" />
                        <h2 className={styles.Parte_1_h2}>Encontre seu crédito</h2>
                        <p className={styles.Parte_2_p}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressão. Lorem Ipsum tem sido a indústria e esta
                        texto padrão fictício desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu...   </p>
                    </div>
                    {/* terceira seção */}
                    <div className={styles.Quadro}>
                        <div className={styles.img_tt}>
                            <img src={icon3} alt="principal" />
                        </div>
                        
                        <img src={bg} alt="Icon1" />
                        <h2 className={styles.Parte_1_h2}>Moeda de câmbio</h2>
                        <p className={styles.Parte_2_p}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressão. Lorem Ipsum tem sido a indústria e esta
                        texto padrão fictício desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu...</p>
                    </div>
             </div>
        </section>
    )
}

export default Quadro;
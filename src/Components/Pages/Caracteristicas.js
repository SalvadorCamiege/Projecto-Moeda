import Styles from './Caracteristicas.module.css';
import featureOne from '../../img/Features/featureOne.svg';
import featureThee from '../../img/Features/featureThree.svg';
import featureTwo from '../../img/Features/featureTwo.svg';
function Caracteristicas(){
    return(
        <section className={Styles.Setima}>
            <div className={Styles.parte_1}>
                <h2 className={Styles.parte_1_h1}>Caracteristicas</h2>
                <h1 className={Styles.parte_1_h2}>A plataforma de criptomoeda mais confiável</h1>
                <p  className={Styles.parte_p}>Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão.    Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500.</p>
            </div>

           
                <div className={Styles.partes}>
                    <img className={Styles.img} src={featureOne} alt="featureOne" />
                    <h1>Armazenamento seguro</h1>
                    <p>Levamos a segurança e a privacidade dos dados muito a sério</p>
                </div>

                <div className={Styles.partes}>
                    <img className={Styles.img} src={featureThee} alt="featureOne" />
                    <h1>Livre para usar</h1>
                    <p>Monitoramento de portfólio de criptomoedas de primeira linha sem custo</p>
                </div>

                <div className={Styles.partes}>
                    <img className={Styles.img} src={featureTwo} alt="featuretwo" />
                    <h1>Dados de preços em tempo real</h1>
                    <p>Atualização 24 horas por dia, 7 dias por semana, usando dados de preços das maiores bolsas</p>
                </div>

        </section>
        
    )
}

export default Caracteristicas;
import { useState } from "react";
import Styles from "./PerguntasFrequentes.module.css";


function PerguntasFrequentes() {
    // Estados para controlar a visibilidade de cada resposta
    const [respostasVisiveis, setRespostasVisiveis] = useState({
        pergunta1: false,
        pergunta2: false,
        pergunta3: false
    });

    // Função para alternar a visibilidade de uma resposta específica
    const toggleResposta = (pergunta) => {
        setRespostasVisiveis((prevState) => ({
            ...prevState,
            [pergunta]: !prevState[pergunta]
        }));
    };

    return (
        <section className={Styles.Angola}>
            <div>
                <h1 className={Styles.perguntas_h1}>Perguntas e Respostas Frequentes</h1>
                <p className={Styles.perguntas_p}>
                    Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem
                    sido o texto modelo padrão da indústria desde os anos 1500.
                </p>
            </div>

            <div>

                
            </div>

            <div className={Styles.perguntas_container}>
                {/* PERGUNTA 1 */}
                <div className={Styles.pergunta}>
                    <button onClick={() => toggleResposta("pergunta1")} className={Styles.pergunta_button}>
                        1. O que é criptomoeda?
                    </button>
                    {respostasVisiveis.pergunta1 && (
                        <p className={Styles.resposta}>
                            Uma criptomoeda é um ativo digital baseado em blockchain, descentralizado e seguro por criptografia.
                        </p>
                    )}
                </div>

                {/* PERGUNTA 2 */}
                <div className={Styles.pergunta}>
                    <button onClick={() => toggleResposta("pergunta2")} className={Styles.pergunta_button}>
                        2. A criptomoeda pode ser convertida em dinheiro?
                    </button>
                    {respostasVisiveis.pergunta2 && (
                        <p className={Styles.resposta}>
                            Sim, criptomoedas podem ser convertidas em dinheiro através de corretoras e exchanges.
                        </p>
                    )}
                </div>

                {/* PERGUNTA 3 */}
                <div className={Styles.pergunta}>
                    <button onClick={() => toggleResposta("pergunta3")} className={Styles.pergunta_button}>
                        3. Por quanto tempo você deve manter criptomoedas?
                    </button>
                    {respostasVisiveis.pergunta3 && (
                        <p className={Styles.resposta}>
                            O tempo de manutenção depende da sua estratégia financeira, podendo ser curto para trading ou longo prazo para investimento.
                        </p>
                    )}
                    
                </div> 
            </div>
        </section>
    );
}

export default PerguntasFrequentes;
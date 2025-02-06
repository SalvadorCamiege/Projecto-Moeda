import Styles from './Intercambio.module.css'; // Ajuste conforme o caminho correto do seu CSS
import Baicoint from '../../img/Table/bitcoin.svg'; 
import cryptoone from '../../img/Table/cryptoone.svg';
import cryptothree from '../../img/Table/cryptothree.svg';
import cryptotwo from '../../img/Table/cryptotwo.svg';

function Intercambio() {
    return (
        <div>
            <section className={Styles.section}>
                <table className={Styles.table}>
                    <thead>
                        <tr>
                            <th colSpan="6">Transmissão ao vivo de tendências de mercado</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>NOME</th>
                            <th>PREÇO</th>
                            <th>MUDANÇA 24H</th>
                            <th>VALOR DE MERCADO</th>
                            <th>AÇÃO</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src={Baicoint} alt="Bitcoin" />
                                Bitcoin (BTC)
                            </td>
                            <td>$ 16,458.23</td>
                            <td>3.96%</td>
                            <td>$ 16,828.25</td>
                            <td className={Styles.buy}>Compra</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>
                                <img src={cryptoone} alt="Ethereum" />
                                Ethereum (ETH)
                            </td>
                            <td>$ 16,458.23</td>
                            <td>3.96%</td>
                            <td>$ 16,828.80</td>
                            <td className={Styles.buy}>Compra</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>
                                <img src={cryptothree} alt="Tether" />
                                Tether (USDT)
                            </td>
                            <td>$ 16,458.23</td>
                            <td className={Styles.negative}>-3.96%</td>
                            <td>$ 16,828.30</td>
                            <td className={Styles.sell}>Vender</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>
                                <img src={cryptotwo} alt="Binance Coin" />
                                Moeda Binance (BNB)
                            </td>
                            <td>$ 16,458.23</td>
                            <td>3.96%</td>
                            <td>$ 16,828.42</td>
                            <td className={Styles.sell}>Vender</td>
                        </tr>
                    </tbody>
                </table>    
            </section> 
        </div>
    );
}

export default Intercambio;
import styles from './ConectarCarteira.module.css';
import Input from '../From/Input';
function ConectarCarteira(){
    return(
        <div>
            <h1 className={styles.Titulo}>Conectar Carteira</h1>
            <Input />
        </div>
    )
}

export default ConectarCarteira;
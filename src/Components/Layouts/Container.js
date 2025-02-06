import styles from './Container.module.css';

function Container(props) {
    return (
        <div className={`${styles.Container} ${props.CustomClasse ? styles[props.CustomClasse] : ''}`}>
            {props.children}
        </div>
    );
}

export default Container;
import styles from './NoteBook.module.css';
import noteBook from '../../img/Trade/macbook.png';
import mec from '../../img/Trade/mac.svg';
import app from '../../img/Trade/appstore.svg';
import windows from '../../img/Trade/windows.svg';
import android from '../../img/Trade/android.svg';




function NoteBook() {
    return(
        <section className={styles.Senction}>
            <div className={styles.section_espaco}>
                <img className={styles.section_img} src={noteBook} alt="notebook" /> 
            </div>

            <div className={styles.principal}>
                <h1 className={styles.Senction_1_h1}>Negocie em qualquer <br/ > lugar e <br/ >
                a qualquer hora</h1>
                <p className={styles.Senction_1_p}>Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos.</p>
                <div className={styles.Senction_1}>
                    <div>
                        <img src={mec} alt="mac" /> 
                    </div>
                    <div>
                        <img src={app} alt="app" /> 
                    </div>

                    <div>
                        <img src={windows} alt="windows" /> 
                    </div>

                    <div>
                        <img src={android} alt="android" /> 
                    </div>
                   
                </div>
            </div>

            
        </section>
        
         
       
    )
}

export default NoteBook;
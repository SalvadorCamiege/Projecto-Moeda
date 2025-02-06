import birdsey from "../../img/Companies/birdseye.svg";
import brea from "../../img/Companies/break.svg";
import keddar from "../../img/Companies/keddar.svg";
import shield from "../../img/Companies/shield.svg";
import tandov from "../../img/Companies/tandov.svg";
import tree from "../../img/Companies/tree.svg";
import styles from "./Girausel.module.css";

function Girausel() {
    const images = [birdsey, brea, keddar, shield, tandov, tree];

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_inner}>
                {/* Renderiza as imagens duas vezes para criar o efeito contínuo */}
                {images.map((img, index) => (
                    <div className={styles.carousel_item} key={`first-${index}`}>
                        <img src={img} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
                {images.map((img, index) => (
                    <div className={styles.carousel_item} key={`second-${index}`}>
                        <img src={img} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Girausel;





import styles from "../proyectos/proyectos.module.css";
import { Proyect_card } from "../proyect_card/Proyect_card";

export const Proyectos = () => {
  return (
    <section>
        <div className={styles.page_padding}>
            <div className={styles.container_large}>
                <h2 className={styles.title}>Proyectos</h2>
            </div>
            <div className={styles.container_servicios}>
                <Proyect_card/>
            </div>
        </div>
    </section>
  )
}

import styles from "../tecnologias/Tecnology.module.css";
import Marquee from 'react-fast-marquee';

export const Tecnology = () => {
  return (
    <section>
        <div className={styles.page_padding}>
            <div className={styles.container_large}>
                <h2 className={styles.title}>Tecnologías</h2>
                <p>Estas son algunas de las tecnologías que uso para realizar los diferentes sitios web, si tienes alguna en mente para construir tu sitio no dudes en decírmelo</p>
            </div>
            <div className={styles.container_marquee}>
                <Marquee gradient={false} speed={90}  children>
                    <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill1.png" alt=""/>
                        <p>ReactJs</p>
                    </div>
                     <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill2.png" alt=""/>
                        <p>JavaScript</p>
                    </div>
                     <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill3.png" alt=""/>
                        <p>CSS</p>
                    </div>
                     <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill4.png" alt=""/>
                        <p>MySql</p>
                    </div>
                     <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill5.png" alt=""/>
                        <p>PHP</p>
                    </div>
                     <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill6.png" alt=""/>
                        <p>JQuery</p>
                    </div>
                     <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill7.png" alt=""/>
                        <p>Bootstrap</p>
                    </div>
                     <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill8.png" alt=""/>
                        <p>Html</p>
                    </div>
                     <div className={styles.img_wrapper}>
                        <img className={styles.img_skill} src="../../imagenes/skill9.png" alt=""/>
                        <p>Wordpress</p>
                    </div>
                </Marquee>
            </div>
        </div>
    </section>
  )
}

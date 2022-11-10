import Link from 'next/link';
import styles from "../parallax/parallax.module.css";

export const Parallax1 = () => {
  return (
    <>
    <div className={styles.page_padding}>
       <div className={styles.bgimg}>
        <div className={styles.caption}>
          <h2>Los mejores Sitios Web<br/>
          Estan esperando por ti!</h2>
          <p>Ofrezco los diseños que mejor se adapten a tus necesidades. <br/>Navega por mi sitio y descubrelo siguiendo el enlace!</p>
          <Link href="Proyectos">
          <a className={styles.boton}>Ver Proyectos</a></Link>
        </div>
       </div>
    </div></>
 )
};
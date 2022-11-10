import styles from "../footer/footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.contenedor_footer}>
    
        <div className={styles.bloque_izq}>
            <h6>CONTACTO</h6>
            <div className={styles.contenedor_unit}>
                icono
                <a href="mailto:info@abrahamturnsek.com" target="_blank">info@abrahamturnsek.com</a>
            </div>
             <div className={styles.contenedor_unit}>
                icono2
                <span>Valencia, España</span>
            </div>
        </div>
            <img className={styles.imagen1} src="../../imagenes/imagen_footer1.png"/>
        <img className={styles.imagen2} src="../../imagenes/imagen_footer2.png"/>
    </footer>
  )
}

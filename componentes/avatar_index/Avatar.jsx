import styles from "../avatar_index/avatar.module.css";

export const Avatar = () => {
  return (
    <div className={styles.contenedor_avatar}>
        <div className={styles.titulo_avatar}>Una Persona — Una Mision</div>
        <div className={styles.contenedor_img_avatar}>
            <img className={styles.img_avatar} src="../../imagenes/avatar.jpg" alt="Abraham Turnsek"/>
            <h3>Abraham Turnsek</h3>
            <p>Desarrollador Web</p>
        </div>
    </div>
    
  )
}

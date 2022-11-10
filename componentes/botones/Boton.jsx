import styles from "./Boton.module.css";

export default function Boton({ contenido }) {
  return (
    <div className={styles.boton}>
      {contenido}
    </div>
  );
}
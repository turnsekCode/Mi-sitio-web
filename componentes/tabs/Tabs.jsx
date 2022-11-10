import styles from "../tabs/tabs.module.css";
import { useState } from "react";

export const Tabs = () => {
      const [open, setOpen] = useState(1);
      const toggleTab = (index)=>{
        setOpen(index)
      }
  return (
    <>
     <div className={styles.container_tabs}>
        <ul className={styles.nav_items}>
            <li onClick={()=>{toggleTab(1)}} className={open === 1 ? `${styles.nav_item} ${styles.item_active}` : `${styles.nav_item}`}>SOBRE MÍ</li>
            <li onClick={()=>{toggleTab(2)}} className={open === 2 ? `${styles.nav_item} ${styles.item_active}` : `${styles.nav_item}`}>PORQUE UNA WEB</li>
            <li onClick={()=>{toggleTab(3)}} className={open === 3 ? `${styles.nav_item} ${styles.item_active}` : `${styles.nav_item}`}>MI MISION</li>
        </ul>
        <div className={styles.tab_content}>
            <div onClick={()=>{toggleTab(1)}} className={open === 1 ? `${styles.tab_pane} ${styles.tab_pane_active}` : `${styles.tab_pane}`}>
            <p>
                Me apasiona la tecnología, por lo cual busco ofrecer
                un excelente servicio y una excelente relación
                calidad-precio en los sitios que elaboro, al final tu
                pones el límite y tú decides, por lo que cada sitio
                tiene tu toque personal.
            </p>
            </div>
            <div onClick={()=>{toggleTab(2)}} className={open === 2 ? `${styles.tab_pane} ${styles.tab_pane_active}` : `${styles.tab_pane}`}>
            <p>
                Hoy en día, el mejor escaparate para tu negocio es
                internet. El mercado cada vez está más globalizado y
                la competencia es más fuerte. Seguramente, esa
                competencia ya tiene su página profesional. Tu imagen
                corporativa y tu página web son la cara visible de tu
                marca.
            </p>
            </div>
            <div onClick={()=>{toggleTab(3)}} className={open === 3 ? `${styles.tab_pane} ${styles.tab_pane_active}` : `${styles.tab_pane}`}>
            <p>
                Mi Mision es satisfacer las necesidades del cliente, y
                que cada sitio web tenga su escencia personal.
            </p>
            </div>
        </div>
    </div>
    </>
  )
}

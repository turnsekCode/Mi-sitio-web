import styles from "../servicios/Servicios.module.css";
import DevicesIcon from '@mui/icons-material/Devices';
import LanguageIcon from '@mui/icons-material/Language';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export const Servicios = () => {
  return (
    <section>
        <div className={styles.page_padding}>
            <div className={styles.container_large}>
                <h2 className={styles.title}>Servicios</h2>
            </div>
            <div className={styles.container_servicios}>
                <div className={styles.bloque}>
                    <div className={styles.icon}>
                        <DevicesIcon/>
                    </div>
                    <div className={styles.title_bloque}>
                        <h3>Responsive Design</h3>
                    </div>
                    <div className={styles.text}>
                        <p>Todo tipo de diseño adaptado a cualquier dispositivo, Moviles, tablet, ordenadores, etc...</p>
                    </div>
                </div>
                <div className={styles.bloque}>
                    <div className={styles.icon}>
                        <LanguageIcon/>
                    </div>
                    <div className={styles.title_bloque}>
                        <h3>Desarrollador de Paginas Web</h3>
                    </div>
                    <div className={styles.text}>
                        <p>Dispuesto a desarrollar e implementar diseños que inspiran y atraen a las personas.</p>
                </div>
                </div>
                <div className={styles.bloque}>
                    <div className={styles.icon}>
                        <DesignServicesIcon/>
                    </div>
                    <div className={styles.title_bloque}>
                        <h3>Diseños Web a Medida</h3>
                    </div>
                    <div className={styles.text}>
                        <p>Creación de sitios web personalizados, cualquiera sea su tipo, landing page, Tienda online, Portafolios, Sitios web personales, Etc...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

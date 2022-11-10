import styles from "../navbarDesktop/navbardesktop.module.css";
import Link from "next/link";
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const NavBarDesktop = () => {
  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav_menu}>
         <Link href="/"><a className={styles.nav_logo_link}><img className={styles.nav_logo} src="../../imagenes/logo.png" /></a></Link>
        <ul className={styles.ul_container}>
          <li>
            <Link href="/pages"><a>Inicio</a></Link>
          </li>
          <li>
            <Link href="/sobremi"><a>Sobre Mi</a></Link>
          </li>
          <li>
            <Link href="/proyectos"><a>Proyectos</a></Link>
          </li>
          <li>
            <Link href="/contacto"><a>Contacto</a></Link>
          </li>
        </ul>
        <div className={styles.nav_info}>
          <div className={styles.horario}>
            <AlarmOnIcon/><p>09:00 AM - 05:00 PM</p>
            <LocalPhoneIcon/><a href="tel:651148387">+34 651-148-387</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

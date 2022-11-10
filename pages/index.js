import Head from "next/head";
import Boton from "../componentes/botones/Boton";
import styles from "../styles/Home.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { Tabs } from "../componentes/tabs/Tabs";
import { Tecnology } from "../componentes/tecnologias/Tecnology";
import { Servicios } from "../componentes/servicios/Servicios";
import { Proyectos } from "../componentes/proyectos/Proyectos";
import { Parallax1 } from "../componentes/parallax/Parallax";
import { Avatar } from "../componentes/avatar_index/avatar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page_wrapper}>
        <main className={styles.main_wrapper}>
          <img
            className={styles.background_shape_1}
            src="../imagenes/imagen fondo 1.png"
            alt=""
          />
          <img
            className={styles.background_shape_2}
            src="../imagenes/imagen fondo 2.png"
            alt=""
          />
          <img
            className={styles.background_shape_3}
            src="../imagenes/imagen fondo 3.png"
            alt=""
          />
          <section>
            <div className={styles.page_padding}>
              <div className={styles.container_medium}>
                <h1>CREA UN SITIO WEB & HAZ CONOCER TU MARCA EN EL MUNDO</h1>
                <div className={styles.text_color_light}>
                  Desarrollador web profesional a tú disposición, confía en mi
                  experiencia
                </div>
                <div className={styles.header_button}>
                  <Link href="/contacto">
                    <a href="#" className={styles.cta}>
                      <span>Contactame</span>
                      <ArrowForwardIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.container_middle}>
              <div className={styles.left_side}>
                <img
                  className={styles.img_left}
                  src="../imagenes/imagen1.jpg"
                />
              </div>
              <div className={styles.right_side}>
                <div className={styles.title}>
                  <h3>Descubre Nuevos Horizontes</h3>
                  <Tabs />
                  <div className={styles.container_boton}>
                    <Boton contenido="Contacto" />
                    <Boton contenido="Sobre Mí" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Tecnology />
          <Servicios />
          <Proyectos />
        </main>
      </div>
      <Parallax1 />
      <Avatar />
    </>
  );
}

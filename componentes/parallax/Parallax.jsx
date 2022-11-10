import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import styles from "../parallax/parallax.module.css";

export const Parallax1 = () => {
  return (
    <>
    <div className={styles.page_padding}>
       
        <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
        <ParallaxBannerLayer image="../../imagenes/imagen1.jpg" speed={-20} />
        <ParallaxBannerLayer>
          <h1>My Headline</h1>
        </ParallaxBannerLayer>
</ParallaxBanner>
     
    </div></>
 )
};
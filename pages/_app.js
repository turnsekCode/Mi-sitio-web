import "../styles/globals.css";
import { NavBarDesktop } from "../componentes/navbarDesktop/NavBarDesktop";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <NavBarDesktop />
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;

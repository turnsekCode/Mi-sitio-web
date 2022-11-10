import "../styles/globals.css";
import { NavBarDesktop } from "../componentes/navbarDesktop/NavBarDesktop";
import { Footer } from "../componentes/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarDesktop />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

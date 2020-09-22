import '../styles/index.scss'
import 'semantic-ui-css/semantic.min.css'
import '../components/layout/DesktopNavbar'
import DesktopNavbar from "../components/layout/DesktopNavbar";

function MyApp({ Component, pageProps }) {
    return (
      <>
        <DesktopNavbar />
        <Component {...pageProps} />
      </>
    )
}

export default MyApp

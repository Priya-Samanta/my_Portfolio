import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { DarkModeProvider } from '../context/DarkModeContext';

function MyApp({ Component, pageProps }) {
  return <><DarkModeProvider><NavBar/> <Component {...pageProps} /><Footer/></DarkModeProvider></>
}

export default MyApp

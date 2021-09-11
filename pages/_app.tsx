// import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import AppNavbar from '../components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="my-app">
      <AppNavbar></AppNavbar>
      <div className="app-body">
        <Component {...pageProps} /> 
      </div>
    </div>
  )
}
export default MyApp

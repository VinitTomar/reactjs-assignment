import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="my-app">
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Sign up</li>
        <li>Profile</li>
      </ul>
      <div className="app-body">
        <Component {...pageProps} /> 
      </div>
    </div>
  )
}
export default MyApp

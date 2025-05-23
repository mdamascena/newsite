import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import 'react-toastify/ReactToastify.css'


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  ) 
}

export default MyApp

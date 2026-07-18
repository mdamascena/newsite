import '../styles/globals.css'
import 'react-toastify/ReactToastify.css'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" forcedTheme="light" disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

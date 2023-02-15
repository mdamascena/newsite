import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderB from '../components/GERAL/Header_branco'
import MainFGTS from '../components/FGTS/MainFGTS'
import Vantagens from '../components/FGTS/VantagensFGTS'
import TaxaFGTS from '../components/FGTS/TaxaFGTS'
import RegrasFGTS from '../components/FGTS/RegrasGeraisFGTS'
import CalcFGTS from '../components/FGTS/SimuladorFGTS'
import Footer from '../components/GERAL/Footer'
import Grid from '../Grid'
import Exec from '../Exercicios'

export default function Home() {
  return (
    
    <div className={styles.container}>

      <Head>
        <title>Antecipação Saque aniversário FGTS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Dongle:wght@300&family=Gochi+Hand&family=Poppins&family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/8d9284e27b.js" crossOrigin="anonymous" async></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </Head>

      <HeaderB/>
      <MainFGTS/>
      <CalcFGTS/>
      <Vantagens/>
      <TaxaFGTS/>
      <RegrasFGTS/>
      <Footer/>
           
    </div>

  )
}
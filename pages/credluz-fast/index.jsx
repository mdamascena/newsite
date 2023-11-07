import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import IndexCREDLUZ from '../../components/CREDLUZ/IndexCREDLUZFAST'
import { Poppins } from 'next/font/google'

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});

export default function Home() {
    return (
    <div className={styles.container}>
        <Head>
            <title>Empréstimo na conta de luz</title>
            <meta name="description" content="Generated by create next app"></meta>
            <link rel="icon" href="/favicon.png"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="theme-color" content="#00024A"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <script src="https://kit.fontawesome.com/8d9284e27b.js" crossOrigin="anonymous" async></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
        </Head>
        <div className={mainFontFamily.className}>
            <IndexCREDLUZ />
        </div>
    </div>
  )
}

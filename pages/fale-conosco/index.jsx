import Head from 'next/head'
import { Poppins } from 'next/font/google'
import IndexFC from '../../components/FALECONOSCO/IndexFaleConosco';

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});

export default function Contact() {
    return (
    <div>
        <Head>
            <title>Fale Conosco</title>
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
            <IndexFC/>
        </div>
    </div>
  )
}

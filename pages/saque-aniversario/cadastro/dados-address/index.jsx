import Head from "next/head";
import styles from "../../../../styles/Home.module.css";
import Image from "next/image";
import LogoB from "../../../../public/img/LOGO_FULL_BRANCO.png";
import Address from '../../../../components/FGTS/FORM/Address'
import { Poppins } from 'next/font/google'

const mainFontFamily = Poppins({
    weight: ['100','200','300','400','500','600','700','800','900'],
    subsets: ['latin']
});

export default function CadastroAdress() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Antecipação Saque aniversário FGTS</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#1242cf" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <script src="https://kit.fontawesome.com/8d9284e27b.js" crossOrigin="anonymous" async></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
            </Head>

            <div className={mainFontFamily.className}>
                <main className="bg-slate-50 poppins">
                    <div className="grid grid-cols-1 lg:grid-cols-5 h-[100vh]">
                        <div className="m-2 col-span-2 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 saturate-150 rounded-xl">
                            <div className="p-6 lg:p-10 flex justify-end">
                                <Image src={LogoB} width={130} alt='' />
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-3 text-slate-400 lg:max-w-3xl lg:px-6 mt-8">
                            <div className="">
                                <Address />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
        </div>
    )
}
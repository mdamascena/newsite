import Head from 'next/head'
import IndexCONTA from '../../components/conta/IndexCONTA'

export default function Login() {
    return (
    <>
        <Head>
            <title>Acesse sua conta</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <IndexCONTA/>
    </>
  )
}

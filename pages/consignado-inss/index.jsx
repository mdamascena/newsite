import Head from 'next/head'
import IndexINSS from '../../components/CONSIGNADO/IndexINSS'

export default function Consignado() {
    return (
    <div>
        <Head>
            <title>Empréstimo consignado INSS</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <IndexINSS/>
    </div>
  )
}
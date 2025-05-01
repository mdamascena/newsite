import Head from 'next/head'
import IndexINSS from '../../components/clt/IndexCLT'

export default function ConsignadoCLT() {
    return (
    <div>
        <Head>
            <title>Empréstimo consignado CLT</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <IndexINSS/>
    </div>
  )
}
import Head from 'next/head'
import IndexCREDLUZ from '../../components/CREDLUZ/IndexCREDLUZFAST'

export default function Home() {
    return (
    <div>
        <Head>
            <title>Empréstimo na conta de luz</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <IndexCREDLUZ />
    </div>
  )
}

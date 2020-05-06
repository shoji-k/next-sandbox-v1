import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getIp } from '../lib/httpbin'

export default function SamplePage({ ip }) {
  return (
    <Layout>
      <Head>
        <title>Sample page</title>
      </Head>

      <h2>sample page</h2>
      <p>hey hey, your ip address is { ip } !</p>
      <Link href="/"><a>back to top</a></Link>

      <style jsx>{``}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const json = await getIp()
  return {
    props: {
      ip: json.origin
    }
  }
}

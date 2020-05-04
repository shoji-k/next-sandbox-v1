import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function SamplePage() {
  return (
    <Layout>
      <Head>
        <title>Sample page</title>
      </Head>

      <h2>sample page</h2>
      <p>hey hey</p>
      <Link href="/"><a>back to top</a></Link>

      <style jsx>{``}</style>
    </Layout>
  )
}

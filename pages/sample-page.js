import Head from 'next/head'
import Link from 'next/link'

export default function SamplePage() {
  return (
    <div className="container">
      <Head>
        <title>Sample page</title>
      </Head>

      <h2>sample page</h2>
      <p>hey hey</p>
      <Link href="/"><a>back to top</a></Link>

      <style jsx>{`
        .container {
          width: 80%;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

import Head from 'next/head'

export default function SamplePage() {
  return (
    <div className="container">
      <Head>
        <title>Sample page</title>
      </Head>
      <h2>sample page</h2>
      <p>hey hey</p>

      <style jsx>{`
        .container {
          width: 80%;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

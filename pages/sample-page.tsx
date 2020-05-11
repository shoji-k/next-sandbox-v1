import React, { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getIp } from '../lib/httpbin'
import Ip from '../components/ip'

export default function SamplePage({ ip }: { ip: string }): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Sample page</title>
      </Head>

      <h2>sample page</h2>
      <div>This page is build on { ip }!</div>
      <Ip />

      <div className="back-link">
        <Link href="/"><a>back to top</a></Link>
      </div>

      <style jsx>{`
        .back-link {
          margin-top: 1rem;
        }
      `}</style>
    </Layout>
  )
}

type IpResponse = {
  props: {  
    ip: string;
  };
}

export async function getStaticProps(): Promise<IpResponse> {
  const json = await getIp()
  return {
    props: {
      ip: json.origin
    }
  }
}

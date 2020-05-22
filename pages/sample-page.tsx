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

      <div className="bg-gray-100 p-8">
        <h2 className="pb-6 text-2xl font-bold">sample page</h2>
        <div>This page is build on { ip }!</div>
        <Ip />

        <div className="pt-6 text-indigo-500">
          <Link href="/"><a>back to top</a></Link>
        </div>
      </div>

      <style jsx>{``}</style>
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

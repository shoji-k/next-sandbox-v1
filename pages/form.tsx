import React, { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Form(): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Form sample</title>
      </Head>

      <div>
        form sample
      </div>

      <style jsx>{``}</style>
    </Layout>
  )
}

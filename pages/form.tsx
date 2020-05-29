import React, { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import SampleForm from '../components/sample-form'

export default function Form(): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Form sample</title>
      </Head>
      <SampleForm />
    </Layout>
  )
}

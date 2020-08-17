import React, { ReactElement } from 'react'
import Head from 'next/head'
import { load, user } from '@/lib/firebase'
import Layout, { siteName } from '@/components/layout'
import { GetStaticProps } from 'next'

export default function Home({ users }: { users: user[] }): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Users: {siteName}</title>
      </Head>
      <section>
        <ul className="flex flex-wrap mt-8 text-center">
          {users.map(({ id, first, middle, last, born }) => (
            <li className="w-full" key={id}>
              {first} {middle} {last} {born}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await load()
  return {
    props: {
      users,
    },
  }
}

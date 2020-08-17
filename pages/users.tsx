import React, { ReactElement } from 'react'
import Head from 'next/head'
import { load, user } from '@/lib/firebase'
import Layout, { siteName } from '@/components/layout'
import UserList from '@/components/users/list'
import { GetStaticProps } from 'next'

export default function Home({ users }: { users: user[] }): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Users: {siteName}</title>
      </Head>
      <section>
        <UserList users={users} />
      </section>
      <section>
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

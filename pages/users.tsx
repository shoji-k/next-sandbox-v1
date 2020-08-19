import React, { ReactElement } from 'react'
import Head from 'next/head'
import { load, user } from '@/lib/firebaseDatabase'
import Layout, { siteName } from '@/components/layout'
import UserForm from '@/components/users/form'
import UserList from '@/components/users/list'
import { GetStaticProps } from 'next'

export default function Home({ users }: { users: user[] }): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Users: {siteName}</title>
      </Head>
      <section className="mb-8">
        <p className="text-center">Lists</p>
        <UserList users={users} />
      </section>
      <section>
        <p className="text-center">Add user</p>
        <UserForm />
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

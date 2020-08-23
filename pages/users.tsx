import React, { useState, useEffect, ReactElement } from 'react'
import Head from 'next/head'
import { load, user } from '@/lib/firebaseDatabase'
import Layout, { siteName } from '@/components/layout'
import UserForm from '@/components/users/form'
import UserList from '@/components/users/list'
import { GetStaticProps } from 'next'

export default function Home({ users }: { users: user[] }): ReactElement {
  const [list, setList] = useState([])

  const addUser = (user: user): void => {
    const newList = [...list, user]
    setList(newList)
  }
  const deleteUser = (id: string): void => {
    const newList = list.filter(l => l.id !== id)
    setList(newList)
  }

  useEffect(() => {
    setList(users)
  }, [users])

  return (
    <Layout>
      <Head>
        <title>Users: {siteName}</title>
      </Head>
      <section className="mb-8">
        <p className="text-center">Lists</p>
        <UserList users={list} deleteUser={deleteUser} />
      </section>
      <section>
        <p className="text-center">Add user</p>
        <UserForm addUser={addUser} />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await load()
  return {
    props: {
      users
    }
  }
}

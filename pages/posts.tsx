import React, { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'
import Date from '@/components/atoms/Date'
import utilStyles from '@/styles/utils.module.css'
import { getSortedPostsData } from '@/lib/posts'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ allPostsData }: { allPostsData: any[] }): ReactElement {
  return (
    <Layout home>
      <Head>
        <title>News: Sample Site</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>News</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps(): { props: { allPostsData: any[] } } {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

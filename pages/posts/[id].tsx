import React, { ReactElement } from 'react'
import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '@/components/atoms/Date'
import utilStyles from '@/styles/utils.module.css'

/* eslint react/prop-types: 0 */
export default function Post({
  postData,
}: {
  title: string
  date: string
  contentHtml: string
}): ReactElement {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div>
          <Link href="/posts">back</Link>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths(): { paths: string[]; fallback: boolean } {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}

type Props = {
  postData: {
    title: string
    date: string
    contentHtml: string
  };
}

export default function Post({ postData }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h2 className='text-5xl font-bold pb-4'>{postData.title}</h2>
        <Date className="text-sm font-thin" dateString={postData.date} />
        <div className="prose max-w-none prose-lg dark:prose-invert font-extralight pt-4 pb-12 prose-a:text-green-500 prose-a:no-underline hover:prose-a:underline prose-img:mb-0 prose-p:leading-relaxed" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
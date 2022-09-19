import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next'
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti"
import { VscGithubInverted } from "react-icons/vsc";

// If props are needed to be generated at request time use the following
/* export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
} */

export const getStaticProps: GetStaticProps = async () => {
  // we can also call async fetch calls here
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type Props = {
  allPostsData: {
    date: string
    title: string
    id: string
  }[];
}

export default function Home({ allPostsData }: Props) {
  // If fetching data on client side, use https://swr.vercel.app which handles caching
  return (
    <Layout home>
      {/* Keep the existing code here */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 className='text-xl font-bold mb-4'>about me.</h2>
        <p className='mb-4 font-extralight'>
          I'm in Melbourne as a React Native Platform lead at <a className="font-normal" href="https://www.transpire.com">Transpire</a>. In summary, I make apps. I split my time between keeping up to date on how people use/make tech, mentoring others and trying to put it into practice across clients.

          <br />
          <br />

          You'll mostly see me talking about Mobile tech, the React and React Native space, typescript and developer workflows.

          <br />
          <br />

          I have a strong passion for religions and <a className="font-normal" href="https://quran.com">Islam</a> in particular. You will see many of my projects in that domain in trying to help the muslim community.
        </p>
        <div className='flex mb-12'>
          <a className="mr-2" href="https://github.com/mzhr"><VscGithubInverted size={24} /></a>
          <a className="mr-2" href="https://www.linkedin.com/in/mazhar-morshed/"><TiSocialLinkedin size={24} /></a>
          <a href="https://twitter.com/mazhar_morshed"><TiSocialTwitter size={24} /></a>
        </div>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2 className='text-xl font-bold mb-4'>posts.</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className='mb-4' key={id}>
              <Link href={`/posts/${id}`}>
                <a className=''>{title}</a>
              </Link>
              <br />
                <Date className="text-sm font-thin" dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

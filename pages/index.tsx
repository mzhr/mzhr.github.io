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
        <img className="object-cover h-64 object-cover w-full mb-8" src="/images/home.jpeg" alt="Girl in a jacket"></img>
        <h2 className='text-3xl font-bold mb-4'>about me.</h2>
        <p className='mb-8 font-extralight text-lg leading-relaxed'>
          I'm in Melbourne as a React Native Platform Lead at <a className="font-normal" href="https://www.transpire.com">Transpire (now CI&T)</a>. In summary, I make apps. I split my time between keeping up to date on how people use/make tech, mentoring others and trying to put it into practice across clients. You'll mostly see me talking about Mobile dev, the React and React Native space, Typescript and developer workflows. I also have a strong passion for religions and <a className="font-normal text-green-500" href="https://quran.com">Islam</a> in particular. You will see many of my projects in that domain in trying to help the muslim community.
        </p>
        <div className='flex mb-12'>
          <a className="mr-4" href="https://github.com/mzhr"><VscGithubInverted size={36} /></a>
          <a className="mr-4" href="https://www.linkedin.com/in/mazhar-morshed/"><TiSocialLinkedin size={36} /></a>
          <a href="https://twitter.com/mazhar_morshed"><TiSocialTwitter size={36} /></a>
        </div>
        
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>posts.</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className='mb-4' key={id}>
              <Link href={`/posts/${id}`}>
                <a className='text-lg'>{title}</a>
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

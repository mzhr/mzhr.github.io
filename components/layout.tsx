import Head from 'next/head';
import Link from 'next/link';

const name = 'mzhr.';
export const siteTitle = 'mzhr. dev notes';

type Props = {
  children: React.ReactNode
  home?: boolean
}

export default function Layout({ children, home}: Props) {
  return (
    <>
    <div className='flex min-w-full justify-center py-24 px-6'>
      <div className='min-w-xs max-w-md sm:max-w-2xl'>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Personal notes on developer journey, focusing on front end technologies"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className='flex justify-center'>
          <h1 className='text-4xl font-light tracking-wider pb-12'>
            <Link href="/">
                  <a>{name}</a>
            </Link>
          </h1>
        </header>
        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
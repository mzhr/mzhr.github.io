import Head from 'next/head'
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout';


// DEPRECATED, kept for notes
export default function FirstPost() {
  return (
    <Layout>
      {/* Head tag replaces html head to add head to a specific route/page */}
      <Head>
        <title>First Post</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>

      {/* Script tag replaces html script to control loading and lazy loading */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        {/* Link tag replaces a tag to do a client side rerouting for client performance */}
        <Link href="/">Back to home</Link>
      </h2>

      {/* Image tag replaces html image to enable lazy loading and responsive sizing*/}
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Layout>
  );
}
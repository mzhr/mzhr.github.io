 import { NextApiRequest, NextApiResponse } from 'next'
// You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
// This is because they won't run on client side as they are only run on server-side

/**
 * @deprecated, example api call
 */
 export default (_: NextApiRequest, res: NextApiResponse) => {
   res.status(200).json({ text: 'Hello' })
 }
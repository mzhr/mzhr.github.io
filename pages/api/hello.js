// You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
// This is because they won't run on client side as they are only run on server-side

// DEPRECATED, here as an example
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
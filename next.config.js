/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // images domains have to white listed
  images: {
    domains: ["rb.gy", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
};

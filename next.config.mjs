/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // The protocol used (http or https)
          hostname: 'images.unsplash.com', // The domain name
          pathname: '/**', // Matches any path under the hostname
        },
      ],
    },
  }
  
  export default nextConfig;
  
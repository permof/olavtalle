import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/tjenester',
        destination: '/#tjenester',
        permanent: true, // 301 redirect - viktig for SEO
      },
      {
        source: '/arealplanlegging',
        destination: '/#arealplanlegging',
        permanent: true,
      },
      {
        source: '/prosjektledelse',
        destination: '/#prosjektledelse',
        permanent: true,
      },
      {
        source: '/skiløypeplanlegging',
        destination: '/#skiloypeplanlegging',
        permanent: true,
      },
      {
        source: '/skiloypeplanlegging',
        destination: '/#skiloypeplanlegging',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/#kontakt',
        permanent: true,
      },
      {
        source: '/om-meg',
        destination: '/#om',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

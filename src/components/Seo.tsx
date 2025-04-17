import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function Seo({ title, description, image, url }: SeoProps) {
  return (
    <Head>
      <title>{title} | My SEO App</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph untuk Facebook, LinkedIn, dll */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}

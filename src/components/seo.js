import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = "Mahmoud Attia's portfolio",
  author = 'Mahmoud Attia',
  meta,
  title = "Mahmoud Attia",
  image = "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:url`,
      content: 'https://www.mahmoudattia.com',
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: image,
    },
    {
      property: `og:image:type`,
      content: "image/jpeg",
    },
    {
      property: `og:image:width`,
      content: "640",
    },
    {
      property: `og:image:height`,
      content: "426",
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};

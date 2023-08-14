import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Ahmad Nursidik Dinar&apos;s Profile Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Ahmad Nursidik Dinar, Website Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Ahmad Nursidik Dinar. A Website Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Ahmad Nursidik Dinar"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}

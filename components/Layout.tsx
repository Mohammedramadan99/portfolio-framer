import Head from 'next/head';
import React, { FunctionComponent, ReactNode } from 'react'

const Layout: FunctionComponent<{ link: string; children: ReactNode }> = ({
  children,
  link,
}) => {
  return (
    <>
      <Head>
        <title>{link === "/" ? "About" : link.slice(1)}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout
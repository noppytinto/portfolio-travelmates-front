/* _document.js
* It is important to note here that we will add Head component to every page 
* for fields such as title and description. Only the global tags go here.
*/

import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="en">
      <Head>
      	{/* All your global head tags such as meta, link, etc. will go here*/}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="description" content="Travel Planner app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
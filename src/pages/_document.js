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
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
                      rel="stylesheet"></link>
                {/* <link rel="apple-touch-icon" href="/logo192.png" /> */}
                {/* <link rel="manifest" href="/manifest.json" /> */}
            </Head>
            <body>
                <Main />
                <div id="bottom-sheet" />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;
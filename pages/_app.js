import '../styles/global.scss';

// for sharing layouts
function MyApp({ Component, pageProps }) {


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <>
            <Component {...pageProps} />
            <p>{'shared'}</p>
        </>
    );
}// MyApp

export default MyApp;

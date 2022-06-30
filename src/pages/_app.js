import '../styles/global.scss';
import {StyledEngineProvider} from '@mui/material';
import {Provider} from 'react-redux';
import mainStore from '../redux/main-store';
import Head from 'next/head';
import {AnimatePresence} from "framer-motion";

// for sharing layouts
function MyApp({Component, pageProps, router}) {


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <StyledEngineProvider injectFirst>
            <Provider store={mainStore}>
                <Head>
                    <title>{'Travelmates'}</title>
                </Head>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
                <p>{'shared'}</p>
            </Provider>
        </StyledEngineProvider>
    );
}// MyApp

export default MyApp;

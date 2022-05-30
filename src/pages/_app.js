import '../styles/global.scss';
import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';
import mainStore from '../redux/main-store';
import Head from 'next/head';

// for sharing layouts
function MyApp({ Component, pageProps }) {


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <StyledEngineProvider injectFirst>
            <Provider store={mainStore}>
                <Head>
                    <title>{'Travelmates'}</title>
                </Head>
                <Component {...pageProps} />
                <p>{'shared'}</p>
            </Provider>
        </StyledEngineProvider>
    );
}// MyApp

export default MyApp;

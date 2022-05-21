import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import mainStore from './redux/main-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client';
// to override MUI Emotion style order
import {StyledEngineProvider} from '@mui/material/styles';

// render
const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);
root.render(
    // enable strict in production
    // notes: components are rendered twice in strict mode + dev mode
    <React.StrictMode>
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <Provider store={mainStore}>
                    <App/>
                </Provider>
            </StyledEngineProvider>
        </BrowserRouter>
    </React.StrictMode>

    //
    // <BrowserRouter>
    //     <Provider store={mainStore}>
    //         <App />
    //     </Provider>
    // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

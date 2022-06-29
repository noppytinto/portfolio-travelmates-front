import {StyledEngineProvider} from '@mui/material';
import {Provider} from 'react-redux';
import mainStore from '../src/redux/main-store';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => (
        <StyledEngineProvider injectFirst>
            <Provider store={mainStore}>
                <Story/>
            </Provider>
        </StyledEngineProvider>
    ),
]
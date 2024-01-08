import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import {ThemeContextProvider} from './context/theme/ThemeContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ThemeContextProvider>
            <App/>
        </ThemeContextProvider>
    </BrowserRouter>
);

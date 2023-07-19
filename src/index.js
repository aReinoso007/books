import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider>
        <App />
    </Provider>
)

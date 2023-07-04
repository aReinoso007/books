import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import BooksContext from './context/books';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BooksContext.Provider>
        <App />
    </BooksContext.Provider>
)

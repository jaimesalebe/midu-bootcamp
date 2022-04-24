import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const notes = [// Siempre tratar que las props o el tipo de dato que venga sea igual al que se evalua para evitar inconvenientes.
// Para este caso tratar que la prop siempre traiga un array aunque este vacio.
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App notes={notes} />
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Blog } from './components/blog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>
);

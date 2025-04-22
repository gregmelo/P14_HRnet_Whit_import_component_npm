// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import AppRouter from './Router';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
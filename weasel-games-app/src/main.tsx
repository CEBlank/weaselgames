import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//import Nav from './Nav'
import Router from './Router';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Router />
    </BrowserRouter>
  </StrictMode>,
)

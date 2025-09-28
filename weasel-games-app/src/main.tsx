import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//import Router from './Router'
import Nav from './Nav'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Nav />
    </BrowserRouter>
  </StrictMode>,
)

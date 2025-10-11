import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ClerkProvider } from '@clerk/clerk-react'


//import Nav from './Nav'
import Router from './Router';

// Import your Publishable Key
import { PUBLISHABLE_KEY } from '.env'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}> 
          <Router />
        </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)

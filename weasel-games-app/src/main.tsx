import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';

//import Nav from './Nav'
import Router from './Router';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Auth0Provider
          domain="dev-ug4olss0uf5d2qw0.us.auth0.com"
          clientId="dR8CFGtMryQoFFVYIZ6bZoGk1tqzZwJ0"
          authorizationParams={{
            redirect_uri: 'window.location.origin'
          }}
        >

        <Router />

      </Auth0Provider>
          
    </BrowserRouter>
  </StrictMode>,
)

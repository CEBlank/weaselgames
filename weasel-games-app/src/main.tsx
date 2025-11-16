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
    <div className='container max-w-full'>
    
    
      <BrowserRouter>

        <Auth0Provider
          domain={import.meta.env.VITE_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >

          <Router />

        </Auth0Provider>
            
      </BrowserRouter>       
      </div>
  </StrictMode>

)

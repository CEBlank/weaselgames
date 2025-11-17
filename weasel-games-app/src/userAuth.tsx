import { useAuth0 } from "@auth0/auth0-react";
//import { ManagementClient } from "auth0-js";
//import { Admin_Role_ID } from '../auth0.config.json';

import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";

export function authUser() {
  const { user, isAuthenticated } = useAuth0();

  console.log("user everything: ", user);


/*   const domain = VITE_AUTH0_DOMAIN;
  const clientId = VITE_AUTH0_CLIENT_ID; */

/*   console.log("domain:", domain);
  console.log("client ID:", clientId)
 */

  return (
    isAuthenticated && user ? (
      <div
        id="profileRoute"
        className="flex">  
        <div
          className="mx-3">
          <a 
            href="/profile"
            id="userIcon">
                Account
          </a> 
        </div>

        <div className="border-l pl-2">
          {LogoutButton()}
        </div>
        
      </div>
    ) : 
      <div>
        {LoginButton()}
      </div>
  );
};

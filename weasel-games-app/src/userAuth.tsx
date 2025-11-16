import { useAuth0 } from "@auth0/auth0-react";
//import { ManagementClient } from "auth0-js";


import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";

export function authUser() {
  const { user, isAuthenticated } = useAuth0();

  //console.log("user everything: ", user);
  //console.log("user role? ", user.role)

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

  console.log("domain:", domain);
  console.log("client ID:", clientId)


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

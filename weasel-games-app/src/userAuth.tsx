import { useAuth0 } from "@auth0/auth0-react";


import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";


export function authUser() {
  const { user, isAuthenticated } = useAuth0();

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

        <div className="border-l">
          {LogoutButton()}
        </div>
        
      </div>
    ) : 
      <div>
        {LoginButton()}
      </div>
  );
};

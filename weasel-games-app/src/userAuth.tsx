import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";

export function authUser() {
  const { user, isAuthenticated } = useAuth0();


  return (
    isAuthenticated && user ? (
      <div>
        {LogoutButton()}
      </div>
    ) : 
      <div>
        {LoginButton()}
      </div>
  );
};

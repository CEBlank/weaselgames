/* 
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
    const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{' '}
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button className="mt-2" onClick={() => loginWithRedirect()}>Log in</button>;
  }
};

export default Profile; 
 */

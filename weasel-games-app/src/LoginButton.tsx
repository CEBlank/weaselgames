
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();


   // console.log('login run')

    return <button onClick={() => loginWithRedirect()}>Sign In</button>;
    

};

export default LoginButton;


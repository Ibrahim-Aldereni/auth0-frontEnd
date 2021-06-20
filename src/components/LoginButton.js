import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(props) {
  // const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !props.isAuth && <button onClick={props.loginFunc}>Log in</button>;
}

export default LoginButton;

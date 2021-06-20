import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton(props) {
  // const { isAuthenticated, logout } = useAuth0();

  return (
    props.isAuth && (
      <button
        onClick={() => {
          props.logoutFunc({ returnTo: window.location.origin });
        }}
      >
        Log out
      </button>
    )
  );
}

export default LogoutButton;

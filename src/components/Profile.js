import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

function Profile(props) {
  // const { user } = useAuth0();

  return props.user ? (
    <>
      <div>Hello {props.user.name}</div>
      <div>Email {props.user.email}</div>
      <img src={props.user.picture} alt="pic" />
    </>
  ) : (
    <p>There is no info</p>
  );
}

export default Profile;

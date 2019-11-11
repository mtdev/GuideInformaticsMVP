import React from "react";

const Login = ({ handleLoginClick }) => {
  return (
    <div>
      Login plz
      <button onClick={e => handleLoginClick({ name: "Noah" })}>Go</button>
    </div>
  );
};

export default Login;

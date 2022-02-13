import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  const [btnLink, setBtnLink] = useState("Ok");
  const handleUsername = (event) => {
    setValues({ ...values, username: event.target.value });
  };
  const handlePassword = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (values.username === "foo" && values.password === "bar") {
      return setBtnLink(<Link to="/home">Ok</Link>);
    } else {
      alert('use credentials "foo" and "bar" ');
    }
  };

  return (
    <form>
      <div className="App">
        <span>Username</span>
        <input
          onChange={handleUsername}
          value={values.username}
          type="text"
          placeholder="username"
        />
        <span>Password</span>
        <input
          onChange={handlePassword}
          value={values.password}
          type="password"
          placeholder="password"
        />
        <button type="submit" onClick={onSubmit}>
          {btnLink}
        </button>
        <h6>Please press twice </h6>
      </div>
    </form>
  );
}

export default Login;

import { useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("Alexey");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(null);

  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username === "Alexey" && password === "dummy") {
      console.log("Success");
      setIsAuth(true);
      navigate("/welcome");
    } else {
      console.log("Error");
      setIsAuth(false);
    }
  }

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      {/* {isAuth && (
        <div className={classes.success}>Authenticated Successfully</div>
      )} */}
      {!isAuth && isAuth !== null && (
        <div className={classes.error}>Invalid credentials.</div>
      )}
      <form onSubmit={handleSubmit} className={classes["login-form"]}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

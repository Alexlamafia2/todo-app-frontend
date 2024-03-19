import { useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authContext";

export default function Login() {
  // const [username, setUsername] = useState("Alexey");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { isAuth, username, setUsername, login } = useAuth();

  const navigate = useNavigate();

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (login(username, password)) {
      navigate(`/welcome`);
    } else {
      setError(true);
    }
  }

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      {isAuth && (
        <div className={classes.success}>Authenticated Successfully</div>
      )}
      {error && <div className={classes.error}>Invalid credentials.</div>}
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

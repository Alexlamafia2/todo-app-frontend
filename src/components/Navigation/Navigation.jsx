import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.css";
import { useAuth } from "../../store/authContext";

export default function Navigation() {
  const { isAuth, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/logout");
  }

  return (
    <header className={classes.header}>
      <div className={classes["header-items"]}>
        <h1 className={classes.logo}>doingIt</h1>
      </div>
      <div>
        {isAuth && (
          <NavLink className={classes["header-item"]} to={`/welcome`}>
            Home
          </NavLink>
        )}
        {isAuth && (
          <NavLink className={classes["header-item"]} to="/todos">
            Todos
          </NavLink>
        )}
        {!isAuth && <NavLink to="/login">Login</NavLink>}
        {isAuth && (
          <button className={classes["header-item"]} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

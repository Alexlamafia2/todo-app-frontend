import Login from "./Auth/Login";
import Welcome from "./Home/Welcome";

export default function TodoApp() {
  return (
    <div>
      Todo Management App
      <Welcome />
      <Login />
    </div>
  );
}

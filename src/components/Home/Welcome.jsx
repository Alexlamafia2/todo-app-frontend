import { Link } from "react-router-dom";
import { useAuth } from "../../store/authContext";

export default function Welcome() {
  const authContext = useAuth();

  return (
    <>
      <h1>Welcome {authContext.username}</h1>
      <Link to="/todos">Manage your todos</Link>
    </>
  );
}

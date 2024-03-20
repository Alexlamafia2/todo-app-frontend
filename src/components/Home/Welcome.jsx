import { Link } from "react-router-dom";
import { useAuth } from "../../store/authContext";
import { useState } from "react";
import {
  // getHelloWorld,
  getHelloWorldPathVariable,
} from "../../api/HelloWorldApiService";

export default function Welcome() {
  const authContext = useAuth();
  const [message, setMessage] = useState(null);

  function handleCall() {
    // axios;
    // .get("http://localhost:8080/hello-world")
    // .then((res) => setMessage(res.data))
    // .catch((err) => console.log(err))
    // .finally(() => console.log("cleanup"));

    // getHelloWorld
    //   .then((res) => setMessage(res.data.message))
    //   .catch((err) => console.log(err))
    //   .finally(() => console.log("cleanup"));

    getHelloWorldPathVariable(authContext.username)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err))
      .finally(() => console.log("cleanup"));
  }

  return (
    <div>
      <h1>Welcome {authContext.username}</h1>
      <Link to="/todos">Manage your todos</Link>
      <div>
        <button onClick={handleCall}>Call API</button>
      </div>
      <div>{message}</div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import classes from "./TodoUpdate.module.css";
import { useAuth } from "../../store/authContext";
import { useEffect, useState } from "react";
import { getTodo } from "../../api/TodoApiService";

export default function TodoUpdate() {
  const { username } = useAuth();
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    handleGetTodo();
  }, [id]);

  function handleGetTodo() {
    getTodo(username, id)
      .then((res) => {
        console.log(res);
        setTodo(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={classes.container}>
      <h1>Enter Todo Details</h1>
      <div>
        <p>{todo.description}</p>
      </div>
    </div>
  );
}

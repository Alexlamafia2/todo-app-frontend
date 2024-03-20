import { useEffect, useState } from "react";
import classes from "./ListTodos.module.css";
import { deleteTodo, getAllTodos } from "../../api/TodoApiService";
import { useAuth } from "../../store/authContext";
import { useNavigate } from "react-router-dom";

export default function ListTodos() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState({ description: "", status: "" });

  const authCtx = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    refreshTodos();
  }, []);

  function refreshTodos() {
    getAllTodos(authCtx.username)
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteTodo(id) {
    console.log(id);

    deleteTodo(authCtx.username, id)
      .then((res) => {
        console.log(res);
        setMessage({
          description: `Todo ${id} deletion successful`,
          status: "ok",
        });
        refreshTodos();
      })
      .catch((err) => {
        setMessage({
          description: `Todo ${id} deletion failed`,
          status: "failed",
        });
        console.log(err);
      });
  }

  function handleUpdateTodo(id) {
    console.log(id);
    navigate(`/todo/${id}`);
  }

  return (
    <div className={classes.todos}>
      <h1>Things you want to do!</h1>
      <div>
        {
          <p
            className={
              message.status === "ok" ? classes.success : classes.failed
            }
          >
            {message.description}
          </p>
        }
      </div>
      <div className={classes["container"]}>
        <table className={classes["table"]}>
          <thead>
            <tr className={classes["container-trs-head"]}>
              <th>Description</th>
              <th>Done?</th>
              <th>Expected Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo, key) => (
              <tr className={classes["container-trs"]} key={key}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate}</td>
                <td>
                  <button
                    className={classes["delete-btn"]}
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className={classes["update-btn"]}
                    onClick={() => handleUpdateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

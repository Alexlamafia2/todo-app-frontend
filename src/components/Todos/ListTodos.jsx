import classes from "./ListTodos.module.css";
const today = new Date();
const targetDate = new Date(
  today.getFullYear() + 12,
  today.getMonth(),
  today.getDay()
);
const todos = [
  {
    id: 1,
    description: "Learn Springboot + React",
    targetDate: targetDate,
    done: false,
  },
  {
    id: 2,
    description: "Learn Blockchain",
    targetDate: targetDate,
    done: false,
  },
  {
    id: 3,
    description: "Learn AI",
    targetDate: targetDate,
    done: false,
  },
];

export default function ListTodos() {
  return (
    <div className={classes.todos}>
      <h1>Things you want to do!</h1>
      <div className={classes["container"]}>
        <table className={classes["table"]}>
          <thead>
            <tr className={classes["container-trs-head"]}>
              <td>ID</td>
              <td>Description</td>
              <td>Done</td>
              <td>Expected Date</td>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => (
              <tr className={classes["container-trs"]} key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

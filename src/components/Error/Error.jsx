import { Link } from "react-router-dom";
import classes from "./Error.module.css";

export default function Error() {
  return (
    <div className={classes.error}>
      <h1>Error</h1>
      <Link to="/">Please go back to main screen</Link>
    </div>
  );
}

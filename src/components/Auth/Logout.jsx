import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div>
      <h1>You are logged out!</h1>
      <div>
        <p>Thank you for using our App. Come back soon!</p>
        <Link to="/login">Go to login</Link>
      </div>
    </div>
  );
}

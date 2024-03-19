import { redirect } from "react-router-dom";

export function authLoader() {
  const auth = localStorage.getItem();
  if (auth !== "1") {
    return redirect("/");
  }
}

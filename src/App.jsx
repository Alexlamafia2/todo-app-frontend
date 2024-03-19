import "./App.css";

import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Welcome from "./components/Home/Welcome";
import Login from "./components/Auth/Login";
import ErrorPage from "./pages/Error";
import TodosPage from "./pages/Todos";
import Logout from "./components/Auth/Logout";
import AuthProvider, { useAuth } from "./store/authContext.jsx";
import HomePage from "./pages/Home.jsx";

// eslint-disable-next-line react/prop-types
function AuthRoute({ children }) {
  const authCtx = useAuth();
  if (authCtx.isAuth) {
    return <>{children}</>;
  } else {
    return (
      <>
        <h1>You are not authenticated</h1>
        <Link to="/login">Go back to login</Link>
      </>
    );
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      {
        path: "welcome",
        element: (
          <AuthRoute>
            <Welcome />
          </AuthRoute>
        ),
      },
      {
        path: "todos",
        element: (
          <AuthRoute>
            <TodosPage />
          </AuthRoute>
        ),
      },
      {
        path: "logout",
        element: (
          <AuthRoute>
            <Logout />
          </AuthRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

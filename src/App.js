import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import About from "./Components/About/About";
import { productsAndCartLoader } from "./Loader/productsAndCartLoader";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Shipping from "./Components/Shipping/Shipping";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: productsAndCartLoader,
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: (
            <PrivateRoutes>
              <Orders></Orders>
            </PrivateRoutes>
          ),
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "shipping",
          element: (
            <PrivateRoutes>
              <Shipping></Shipping>
            </PrivateRoutes>
          ),
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

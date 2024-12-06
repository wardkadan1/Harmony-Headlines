import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashbord, { dashbordLoder } from "./components/Dashbord";
import Layout from "./components/Layout";
import Article from "./components/Article";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          loader: dashbordLoder,
          element: <Dashbord />,
        },
        {
          path: "/article/:id",
          element: <Article />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

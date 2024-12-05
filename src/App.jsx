import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashbord from "./components/Dashbord";
import Layout from "./components/Layout";
import Article from "./components/Article";
import { useState } from "react";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [mood, setMood] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      /*children: [
        {
          index: true,
          element: (
            <Dashbord
              news={news}
              setNews={setNews}
              mood={mood}
              setMood={setMood}
            />
          ),
        },*/
      /*{
          path: "/article/:id",
          element: <Article news={news} mood={mood} />,
        },
      ],*/
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

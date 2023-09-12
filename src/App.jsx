import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useDebugRender from "tilg";
import Layout from "./layout/Layout";
import HomePage from "./routes/HomePage";
import CardPage from "./routes/CardPage";
import ErrorPage from "./routes/ErrorPage";
import { layoutLoader } from "./utils/loaders";
import ChartPage from "./routes/ChartPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: layoutLoader,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "card",
        element: <CardPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "chart",
        element: <ChartPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  useDebugRender();

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "../src/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useDebugRender from "tilg";
import Layout from "./layout/Layout";
import HomePage from "./routes/HomePage";
import CardPage from "./routes/CardPage";
import ErrorPage from "./routes/ErrorPage";
import { layoutLoader } from "./utils/loaders";
import ChartPage from "./routes/ChartPage";

function App() {
  const [mass, setMass] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
      .then((response) => response.json())
      .then((json) => {
        setList(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          element: <HomePage mass={mass} />,
          errorElement: <ErrorPage />,
        },
        {
          path: "card",
          element: <CardPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "chart",
          element: <ChartPage mass={mass} />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  useDebugRender();
  function setSearchValueHandler(e) {
    setSearchValue(e.target.value);
    e.preventDefault();
  }
  function submitHandler(e) {
    setMass(searchValue);
    e.preventDefault();
  }
  return (
    <div>
      <div className="mass-Search">
        <div className="w-1/3 flex-none">
          <label htmlFor="strike-search2" className="mb-2 block">
            <svg
              className="search_Icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={submitHandler}
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </label>
          <form onSubmit={submitHandler}>
            <input
              type="input"
              list="strike-list2"
              id="strike-search2"
              name="strike-search2"
              placeholder="Search by composition"
              onChange={setSearchValueHandler}
              className="input join-item input-bordered w-full border-base-300"
            />
          </form>

          <datalist id="strike-list2">
            {list.map((strike, i) => (
              <option key={i} value={strike.recclass} />
            ))}
          </datalist>
        </div>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

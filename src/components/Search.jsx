import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

function Search() {
  const strikesList = [useRouteLoaderData("root")];
  const [list] = useState(strikesList[0].strikesList);

  return (
    <div className="w-1/3 flex-none">
      <label htmlFor="strike-search" className="mb-2 block">
        <svg
          className="h-7 w-7 fill-inherit opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </label>
      <input
        type="input"
        list="strike-list"
        id="strike-search"
        name="strike-search"
        placeholder="Search"
        className="input join-item input-bordered w-full border-base-300"
      />

      <datalist id="strike-list">
        {list.map((strike, i) => (
          <option key={i} value={strike.name} />
        ))}
      </datalist>
    </div>
  );
}

export default Search;

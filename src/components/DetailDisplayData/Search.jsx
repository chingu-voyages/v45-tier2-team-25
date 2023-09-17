import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

const Search = ({ filterData }) => {
  const strikesList = [useRouteLoaderData("root")];
  const [list] = useState(strikesList[0].strikesList);
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterData(searchTerm);
  };
  return (
    <div className="my-3">
      <input
        type="input"
        list="strike-list"
        id="strike-search"
        name="strike-search"
        placeholder="Search by name"
        className="input join-item input-bordered w-full border-base-300"
        onChange={handleSearch}
      />

      <datalist id="strike-list">
        {list.map((strike, i) => (
          <option key={i} value={strike.name} />
        ))}
      </datalist>
    </div>
  );
};

export default Search;

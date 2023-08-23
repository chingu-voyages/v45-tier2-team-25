import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar justify-between bg-transparent px-20 py-4">
      <div className="w-1/3 justify-between">
        <div>
          <a className="text-xl font-semibold">Team 25</a>
        </div>
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            <svg
              className="h-9 w-9 fill-inherit"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="m21.447 6.105-6-3a1 1 0 0 0-.895 0L9 5.882 3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895zM10 7.618l4-2v10.764l-4 2V7.618zm-6-2 4 2v10.764l-4-2V5.618zm16 12.764-4-2V5.618l4 2v10.764z"></path>
            </svg>
          </NavLink>
          <NavLink
            to="/card"
            className={({ isActive }) => (isActive ? "border-b-2" : "")}
          >
            <svg
              className="h-9 w-9 fill-inherit"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
            </svg>
          </NavLink>
        </div>
      </div>
      <div className="w-1/3 flex-none">
        <input
          type="text"
          placeholder="Search"
          className="input join-item input-bordered w-full border-base-300"
        />
      </div>
    </header>
  );
}

export default Navbar;

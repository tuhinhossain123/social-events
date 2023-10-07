import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row space-x-6 py-5 justify-between items-center">
        <h2 className="text-xl font-serif font-semibold text-orange-500">Wedding  Events</h2>
        <ul className="flex flex-row md:flex-row pr-5 gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-bold text-lg"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/details"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-bold text-lg"
                  : ""
              }
            >
             Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-bold"
                  : ""
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-600 underline font-bold"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
        <button className="btn btn-ghost">button</button>
      </nav>
    </div>
  );
};

export default Navbar;

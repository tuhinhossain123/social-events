import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
 

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("login success"))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <nav className="flex flex-col md:flex-row space-x-6 py-5 justify-between items-center">
        <h2 className="text-xl font-serif font-semibold text-orange-500">
          Social Events
        </h2>
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
          {user ? (
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
          ) : (
            ""
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-slate-600 underline font-bold text-lg"
                      : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/review"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-slate-600 underline font-bold text-lg"
                      : ""
                  }
                >
                  Review
                </NavLink>
              </li>
            </>
          )}
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
        <div className="flex items-center">
          {user ? (
            <>
              <span className="mr-4">{user.email}</span>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Sing Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

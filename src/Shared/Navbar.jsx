import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { AuthContext } from "../providers/AuthProvider";
import Avatar from "../components/Avatar/Avatar";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar fixed z-10 bg-gray-200 bg-opacity-20 text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className={`lg:hidden ${menuOpen ? "active" : "default"}`}
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52 ${
                menuOpen ? "active" : "default"
              }`}
            >
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    onClick={toggleMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/colleges"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    onClick={toggleMenu}
                  >
                    Colleges
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admission"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    onClick={toggleMenu}
                  >
                    Admission
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-college"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    onClick={toggleMenu}
                  >
                    My College
                  </NavLink>
                </li>
              </>
            </ul>
          </div>
          <p className="btn btn-ghost normal-case text-xl">
            <img
              src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-4428.jpg?w=2000"
              alt=""
              className="w-12 h-12"
            />{" "}
            <p className="text-slate-950 font-serif  ">Edu.BD</p>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/colleges"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={toggleMenu}
                >
                  Colleges
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admission"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={toggleMenu}
                >
                  Admission
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-college"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  onClick={toggleMenu}
                >
                  My College
                </NavLink>
              </li>
            </>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
           <Link to={'/user'}>    <p className="text-xs font-bold mr-2 text-black">{user.displayName}</p></Link>

              <motion.button
                onClick={handleLogOut}
                whileHover={{ scale: 1.1 }}
                className="bg-[#11b2ed] w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
              >
                LogOut
              </motion.button>
            </>
          ) : (
            <>
              <li className="btn btn-warning">
                <Link to="/login" onClick={toggleMenu}>
                  Login
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

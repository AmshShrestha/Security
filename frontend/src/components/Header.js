import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setLogout } from "../redux/features/authSlice";

const Header = ({ isAuthenticated, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
    toast.success("Logout Successfully!");
  };

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo and Heading */}
        <Link to="/" className="text-2xl font-your-font-family text-white">
          Travel Log
        </Link>

        {/* Navigation Links */}
        <ul className="flex mx-auto space-x-3">
          <NavLink
            to="/all/logs"
            className="text-your-font-family text-yellow-500 hover:text-white"
            activeClassName="text-white"
          >
            All Logs
          </NavLink>
          <NavLink
            to="/add/logs"
            className="text-your-font-family text-yellow-500 hover:text-white"
            activeClassName="text-white"
          >
            Add Log
          </NavLink>
        </ul>

        {/* User Authentication */}
        <div className="ml-auto">
          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-white hover:underline">
                {user?.username}
              </Link>
              <button onClick={handleLogout} className="btn btn-warning btn-sm">
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-3">
              <Link to="/login" className="btn btn-warning btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-warning btn-sm">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

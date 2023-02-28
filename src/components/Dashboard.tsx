import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import userAvatar from "../images/user-avatar.png";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux"
import { handleUserFetch } from "../store/actions/auth";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface dashboardProps {
  heading?: string
}

function Dashboard({ heading }: dashboardProps): JSX.Element {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const store = useSelector((reduxState: {
    auth: {
      user: any; isLoggedIn: boolean
    }
  }) => reduxState.auth)

  useEffect(() => {
    dispatch(handleUserFetch());
  }, [dispatch]);

  if (!store.isLoggedIn && !window.localStorage.getItem('Login')) {
    return <Redirect to="/login" />
  }


  const toggleDropdown = () => {
    setShowDropdown((prevState: boolean) => !prevState);
  };

  const handleLogout = () => {
    // TODO: implement logout logic
    dispatch({ type: 'LOGOUT_USER' });
    window.localStorage.removeItem('Login')
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-2 bg-gray-100">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* User avatar and dropdown */}
        <div className="relative">
          <button
            className="flex items-center"
            onClick={toggleDropdown}
            aria-label="User dropdown"
          >
            <img
              src={userAvatar}
              alt="User avatar"
              className="h-8 rounded-full"
            />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded-lg shadow-xl">
              <div
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
              >
                {store.user?.name?.title} {store.user?.name?.first}{" "}
                {store.user?.name?.last}
              </div>
              <button
                type="submit"
                aria-label="Logout"
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex">
        <nav className="bg-gray-200 h-screen w-36">
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-4 text-gray-800 hover:bg-gray-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/invoices"
                className="block py-2 px-4 text-gray-800 hover:bg-gray-300"
              >
                Invoices
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block py-2 px-4 text-gray-800 hover:bg-gray-300"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main content */}
        <main className="px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">
            {heading}
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

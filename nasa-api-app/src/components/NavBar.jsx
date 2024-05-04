import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    // Reload the page to redirect to the login page
    window.location.href = "/";
  };

  return (
    <nav className="text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              SpaceExplorer
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link
                to="/api/apod"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
              >
                APOD
              </Link>
              <Link
                to="/api/mars"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
              >
                MARS
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/api/apod"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700"
            >
              APOD
            </Link>
            <Link
              to="/api/mars"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700"
            >
              MARS
            </Link>
            <button
              onClick={handleLogout}
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Link , useNavigate} from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Check if password meets minimum length requirement
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must be at least 8 characters long",
      });
      return;
    }

    // Check if password and re-password match
    if (password !== rePassword) {
      Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password and Re-entered Password do not match",
      });
      return;
    }

    try {
      // Make an HTTP POST request to your backend API endpoint
      await axios.post("nasa-app-server-production.up.railway.app/api/users/register", {
        username,
        email,
        password,
      });

      // Registration successful
      setIsRegistered(true);

      // Display success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You have successfully registered.",
      });

      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (error) {
      // Display error message if registration fails
      Swal.fire({
        icon: "error",
        title: "Registration Error",
        text: error.response.data.message, // Assuming your backend sends error messages in the response
      });
    }
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/online-learning-platform-1fb67.appspot.com/o/wp8454645.jpg?alt=media&token=dd8af71e-dd06-4a76-8037-2d32ff2d1d78')`,
      }}
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Registration
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegistration}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="relative block w-full px-3 py-2 mb-5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative block w-full px-3 py-2 mb-5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full px-3 py-2 mb-5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="rePassword" className="sr-only">
                Re-enter Password
              </label>
              <input
                id="rePassword"
                name="rePassword"
                type="password"
                autoComplete="new-repassword"
                required
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                className="relative block w-full px-3 py-2 mb-5 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Re-enter Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        {!isRegistered && (
          <p className="mt-2 text-sm text-center text-gray-600">
            Already registered?{" "}
            <Link to="/">
              <button
                onClick={handleLogin}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login
              </button>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import APOD from "./components/APOD";
import Mars from "./components/Mars";
import RegistrationPage from "./components/RegistrationPage";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import NotFound from "./components/NotFound";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/api/apod"
          element={isLoggedIn ? <APOD /> : <Navigate to="/api/login" />}
        />
        <Route
          path="/api/mars"
          element={isLoggedIn ? <Mars /> : <Navigate to="/api/login" />}
        />
        <Route path="/api/register" element={<RegistrationPage />} />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/api/apod" />
            ) : (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/api/nav" element={<NavBar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

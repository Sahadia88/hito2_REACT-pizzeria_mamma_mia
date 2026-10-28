// src/components/Navbar.jsx
import { formatNumber } from "../utils/formatNumber";

const Navbar = ({ onNavegar }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="d-flex align-items-center gap-2">
        <span className="navbar-brand mb-0 me-2">Pizzería Mamma Mía!</span>

        {/* Siempre visible */}
        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => onNavegar("home")}
        >
          Home
        </button>

        {/* Depende del token */}
        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">Profile</button>
            <button className="btn btn-outline-light btn-sm">Logout</button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => onNavegar("login")}
            >
              Login
            </button>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => onNavegar("register")}
            >
              Register
            </button>
          </>
        )}
      </div>

      {/* Siempre visible */}
      <div>
        <button className="btn btn-outline-info btn-sm">
          🛒 Total: ${formatNumber(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

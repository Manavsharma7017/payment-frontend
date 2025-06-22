import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import About from "./About";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRecoilValue } from "recoil";
import { isLoggedIn } from "@/atoms/Atoms";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedInval =useRecoilValue(isLoggedIn);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/auth");
  };

  const appTitle = ["P", "a", "y", "S", "m", "a", "r", "t"];

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-200 bg-white shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <svg
          className="w-7 h-7 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75..."
          />
        </svg>
        <div className="flex space-x-1 text-2xl font-bold">
          {appTitle.map((letter, i) => (
            <span
              key={i}
              className="hover:scale-110 hover:-translate-y-0.5 transition-transform duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
            >
              {letter}
            </span>
          ))}
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-lg font-medium text-gray-700">
        <Link to="/about" className="hover:underline underline-offset-4">
          About
        </Link>
        <Link to="/das" className="hover:underline underline-offset-4">
          Dashboard
        </Link>
        <Link to="/transfer/email" className="hover:underline underline-offset-4">
          Transfer
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex items-center space-x-3">
        {isLoggedInval ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 w-48 bg-white border shadow-md rounded-lg flex flex-col space-y-2 p-4 z-50 md:hidden text-black">
          <About />
          <Link to="/das" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/transfer/email" onClick={() => setMenuOpen(false)}>
            Transfer
          </Link>
          {token ? (
            <Button onClick={() => { handleLogout(); setMenuOpen(false); }}>
              Logout
            </Button>
          ) : (
            <Button onClick={() => { handleLogin(); setMenuOpen(false); }}>
              Login
            </Button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

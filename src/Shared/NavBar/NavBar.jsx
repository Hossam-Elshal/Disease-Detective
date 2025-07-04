import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src={logoImg} className="h-8" alt="Logo" />
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          {/* ✅ زرار Get Started يظهر فقط لو المستخدم مش مسجل دخول */}
          {!isLoggedIn && (
            <Link
              to={"/login"}
              className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              style={{ backgroundColor: "#0367a1" }}
            >
              Get Started
            </Link>
          )}

          {/* Burger Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Nav Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#header" className="block py-2 px-3 text-[#0367a1] hover:text-[#0367a1]/80">Home</a>
            </li>
            <li><a href="#about" className="block py-2 px-3 hover:text-[#0367a1]/80">About us</a></li>
            <li><a href="#services" className="block py-2 px-3 hover:text-[#0367a1]/80">Services</a></li>
            <li><a href="#blog" className="block py-2 px-3 hover:text-[#0367a1]/80">Blog</a></li>
            <li><a href="#contact" className="block py-2 px-3 hover:text-[#0367a1]/80">Contact us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function handleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <header className="flex flex-col">
      <h1 className="text-3xl mt-10 font-bold text-center bg-gradient-to-l from-red-400 to-blue-600 bg-clip-text text-transparent">
        My portfolio
      </h1>
      <nav className="border-black dark:border-white border-2 w-60 mx-auto justify-evenly mt-5 items-center  rounded-2xl flex p-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline  decoration-2 font-RobotoMono"
              : "font-RobotoMono"
          }
        >
          Home
        </NavLink>
        |
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "underline decoration-2 font-RobotoMono"
              : "font-RobotoMono"
          }
        >
          Projects
        </NavLink>
        |
        {darkMode ? (
          <FaMoon
            size="18"
            className="cursor-pointer text-blue-400"
            onClick={handleTheme}
          />
        ) : (
          <FaSun
            size="20"
            className="cursor-pointer text-yellow-200"
            onClick={handleTheme}
          />
        )}
      </nav>
    </header>
  );
}

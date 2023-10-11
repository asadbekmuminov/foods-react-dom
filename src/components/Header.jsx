import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "light";
}
function Header() {
  const [mode, setMmode] = useState(getThemeFromLocalStorage);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);
  const ChangeMode = () => {
    setMmode((prev) => {
      return prev == "light" ? "dark" : "light";
    });
  };
  return (
    <nav className="bg-teal-200 mb-10  ">
      <div className="align-element flex items-center py-5 ">
        <Link to={"/"} className="text-3xl font-black text-black">
          Foods
        </Link>
        <span
          className="ml-auto cursor-pointer"
          onClick={ChangeMode}
          style={{ fontSize: "24px", color: "black" }}
        >
          {mode == "light" ? <FaMoon /> : <FaSun />}
        </span>
        <Link to={"create"} className="btn btn-active btn-accent ml-5">
          Create
        </Link>
      </div>
    </nav>
  );
}

export default Header;

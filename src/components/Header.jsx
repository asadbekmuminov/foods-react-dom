import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
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
    <nav className="bg-teal-200  ">
      <div className="align-element flex items-center py-5 mb-10 ">
        <p className="text-3xl font-black text-black">Foods</p>
        <span
          className="ml-auto cursor-pointer"
          onClick={ChangeMode}
          style={{ fontSize: "24px", color: "black" }}
        >
          {mode == "light" ? <FaMoon /> : <FaSun />}
        </span>
      </div>
    </nav>
  );
}

export default Header;

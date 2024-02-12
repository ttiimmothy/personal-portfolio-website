import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted ? (
    <button
      type="button"
      className="relative p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md inline-flex items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" && <IoSunnyOutline size={20} />}
      {theme === "dark" && <IoMoonOutline size={20} color="#adadad" />}
    </button>
  ) : (
    <></>
  );
}

export default ThemeToggler;

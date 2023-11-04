import { toggleTheme } from "@/components/utils/themeToggle";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function ThemeToggler() {
  return (
    <label className="relative p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md inline-flex items-center cursor-pointer">
      <input
        onClick={toggleTheme}
        type="checkbox"
        value=""
        className="sr-only peer"
      />
      <div className="relative lg:block hidden">
        <IoSunnyOutline
          size={24}
          className="absolute top-0 visible dark:invisible"
        />
        <IoMoonOutline
          size={24}
          color="white"
          className="invisible dark:visible"
        />
      </div>
    </label>
  );
}

export default ThemeToggler;

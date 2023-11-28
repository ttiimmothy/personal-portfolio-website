import { SetStateAction } from "react";
import styles from "./navMobileMenuIcon.module.css";

export const NavMobileMenuIcon: React.FC<{
  toggleMenu: (value: SetStateAction<boolean>) => void;
  menuOpen: boolean;
}> = ({ toggleMenu, menuOpen }) => {
  return (
    <button
      onClick={() => {
        toggleMenu(!menuOpen);
      }}
      aria-label="Menu"
      className={`${styles["menu-icon"]} text-nav-mobile-menu-icon dark:text-dark-nav-mobile-menu-icon`}
    >
      <div className="w-[30px] relative h-[24px] inline-block">
        <div
          className={`${
            menuOpen
              ? styles["button-box-inner-open"]
              : styles["button-box-inner"]
          } bg-nav-mobile-menu-icon before:bg-nav-mobile-menu-icon after:bg-nav-mobile-menu-icon dark:bg-dark-nav-mobile-menu-icon dark:before:bg-dark-nav-mobile-menu-icon dark:after:bg-dark-nav-mobile-menu-icon`}
        />
      </div>
    </button>
  );
};

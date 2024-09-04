import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import anime from "animejs";
import IconLoaderSvg from "@/components/icons/IconLoaderSvg";
import styles from "./pageLoader.module.css";
import { colors } from "@/components/color/default";
import { cn } from "@/utils/classNames";

const PageLoader: React.FC<{
  finishLoading: () => void;
}> = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const animate = () => {
      const loader = anime.timeline({
        complete: () => finishLoading(),
      });
      loader
        .add({
          targets: "#logo path",
          delay: 300,
          duration: 1500,
          easing: "easeInOutQuart",
          strokeDashoffset: [anime.setDashoffset, 0],
        })
        .add({
          targets: "#logo",
          delay: 500,
          duration: 300,
          easing: "easeInOutQuart",
          opacity: 0,
          scale: 0.1,
        })
        .add({
          targets: ".loader",
          duration: 200,
          easing: "easeInOutQuart",
          opacity: 0,
          zIndex: -1,
        });
    };

    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div
      className={cn(
        "loader flex justify-center items-center fix inset-0 w-screen h-screen",
        colors.lightLoadingBackground,
        `dark:${colors.darkLoadingBackground}`,
        "z-99"
      )}
    >
      <Helmet bodyAttributes={{ class: "body-hidden" }} />
      <div
        className={
          isMounted ? styles["logo-wrapper-mounted"] : styles["logo-wrapper"]
        }
      >
        <IconLoaderSvg />
      </div>
    </div>
  );
};

export default PageLoader;

import BallCanvas from "@/components/canvas/BallCanvas";
import technologies from "@/constants/technologies.json";
import { TechnologyInfo } from "@/interfaces/TechnologyInfo";
import {
  css,
  docker,
  git,
  javascript,
  mongodb,
  csharp,
  react,
  redux,
  typescript,
} from "@/assets";

const TechnologyBall = ({ technology }: { technology: TechnologyInfo }) => {
  let icon;
  switch (technology.icon) {
    case "css":
      icon = css;
      break;
    case "docker":
      icon = docker;
      break;
    case "git":
      icon = git;
      break;
    case "css":
      icon = css;
      break;
    case "javascript":
      icon = javascript;
      break;
    case "mongodb":
      icon = mongodb;
      break;
    case "csharp":
      icon = csharp;
      break;
    case "react":
      icon = react;
      break;
    case "redux":
      icon = redux;
      break;
    case "typescript":
      icon = typescript;
      break;
  }
  return <>{icon && <BallCanvas icon={icon} />}</>;
};

const TechnologyBalls = () => {
  return (
    <>
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <TechnologyBall technology={technology} />
        </div>
      ))}
    </>
  );
};

export default TechnologyBalls;

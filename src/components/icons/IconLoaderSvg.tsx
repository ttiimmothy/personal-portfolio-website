const IconLoaderSvg: React.FC = () => {
  return (
    <svg
      id="logo"
      className="text-loader-gray dark:text-loader-bright"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <title>Loader Logo</title>
      <g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 50
          m 30, 0
          a 30,30 0 1,0 -60,0
          a 30,30 0 1,0 60,0"
        />
      </g>
    </svg>
  );
};

export default IconLoaderSvg;

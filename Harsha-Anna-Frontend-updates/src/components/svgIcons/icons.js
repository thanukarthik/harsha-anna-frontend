export const collapseUp = ({ width = 20, height = 20 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    version="1"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 48 48"
    fill="#000000"
    transform="rotate(0)"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <polygon
        fill="#edf0f2"
        points="5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12"
      ></polygon>{" "}
    </g>
  </svg>
);

export const collapseDown = ({ width = 20, height = 20 }) => (
  <svg
    viewBox="0 0 48 48"
    width={width}
    height={height}
    version="1"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 48 48"
    fill="#000000"
    transform="rotate(180)"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <polygon
        fill="#edf0f2"
        points="5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12"
      ></polygon>{" "}
    </g>
  </svg>
);

export const menuIcons = ({ width = 20, height = 20 }) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M20 7L4 7"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>{" "}
      <path
        d="M20 12L4 12"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>{" "}
      <path
        d="M20 17L4 17"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>{" "}
    </g>
  </svg>
);
const Icons = {
  collapseUp: collapseUp,
  collapseDown: collapseDown,
  menuIcons: menuIcons,
};

export const GetIcon = ({ type, width = 20, height = 20, fill = "" }) => {
  if (Icons[type]) {
    const Icon = Icons[type];
    const props = fill ? { fill } : {};
    return <Icon width={width} height={height} {...props} />;
  }
  return <></>;
};

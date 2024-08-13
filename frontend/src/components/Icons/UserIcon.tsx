import { SearchIconProps } from "../../types";

function UserIcon({ customStyle }: SearchIconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlSpace="preserve"

      className={`size-[22px] ${customStyle} `}
    >
      <defs></defs>
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 83.926 90 H 6.074 v -3 c 0 -21.464 17.462 -38.926 38.926 -38.926 S 83.926 65.536 83.926 87 V 90 z M 12.209 84 H 77.79 C 76.27 67.246 62.144 54.074 45 54.074 S 13.731 67.246 12.209 84 z"
          style={{
            stroke: "black",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(0,0,0)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
        <path
          d="M 45 44.134 c -12.168 0 -22.067 -9.899 -22.067 -22.067 S 32.832 0 45 0 c 12.167 0 22.066 9.899 22.066 22.067 S 57.167 44.134 45 44.134 z M 45 6 c -8.859 0 -16.067 7.208 -16.067 16.067 S 36.141 38.134 45 38.134 s 16.066 -7.208 16.066 -16.067 S 53.859 6 45 6 z"
          style={{
            stroke: "black",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "rgb(0,0,0)",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(1 0 0 1 0 0)"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default UserIcon;


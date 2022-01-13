import type { JSX } from "solid-js";

export function IconExclamationTriangle(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      <g fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.445.609a1.1 1.1 0 0 0-1.89 0L.161 11.337A1.1 1.1 0 0 0 1.106 13h12.788a1.1 1.1 0 0 0 .945-1.663L8.445.609zm-1.03.512a.1.1 0 0 1 .17 0l6.395 10.728a.1.1 0 0 1-.086.151H1.106a.1.1 0 0 1-.086-.151L7.414 1.12zm-.588 3.365a.674.674 0 1 1 1.346 0L8.02 8.487a.52.52 0 0 1-1.038 0l-.154-4zm1.423 5.99a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

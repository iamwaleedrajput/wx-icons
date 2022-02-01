import React from "react";
import { sizeHandler } from "./utils/utils";

function Music(props) {
  return (
    <div>
      <svg
        fill={props.color}
        version="1"
        viewBox="0 0 48 48"
        enable-background="new 0 0 48 48"
        height={sizeHandler(props)}
        width={sizeHandler(props)}
      >
        <g fill="#E91E63">
          <circle cx="19" cy="33" r="9"></circle>
          <polygon points="24,6 24,33 28,33 28,14 39,17 39,10"></polygon>
        </g>
      </svg>
    </div>
  );
}

export default Music;

import React from "react";
import { sizeHandler } from "./utils/utils";

function Twitch(props) {
  return (
    <div>
      <svg
        fill={props.color}
        viewBox="0 0 16 16"
        height={sizeHandler(props)}
        width={sizeHandler(props)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"></path>
        <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"></path>
      </svg>
    </div>
  );
}

export default Twitch;

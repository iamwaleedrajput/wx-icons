import React from 'react';

function Bookmark(props) {
  return <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height={props.size ? props.size : 20} width={props.size ? props.size : 20}><path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path></svg>;
}

export default Bookmark;

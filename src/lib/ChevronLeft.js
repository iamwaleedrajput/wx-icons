import React from 'react';

function ChevronLeft(props) {
  return <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height={props.size ? props.size : 20} width={props.size ? props.size : 20}><path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M328 112L184 256l144 144"></path></svg>;
}

export default ChevronLeft;

import React from 'react';
import { sizeHandler } from './utils/utils';


function ChevronRight(props) {
  return <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height={sizeHandler(props)} width={sizeHandler(props)}><path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M184 112l144 144-144 144"></path></svg>
}

export default ChevronRight;

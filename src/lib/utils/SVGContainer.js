import React from 'react';
import { sizeHandler } from './utils';


export default function SVGContainer({props,children}) {
  console.log(props)
  return <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height={sizeHandler(props)}
  width={sizeHandler(props)}>{children}</svg>
}

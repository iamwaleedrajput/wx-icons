import React from 'react';
import { sizeHandler } from '../utils/utils';


function Bell(props)
 {
  return <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height={sizeHandler(props)} width={sizeHandler(props)}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>;
}

export default Bell;

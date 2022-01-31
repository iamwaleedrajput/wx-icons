import React from 'react';
import { sizeHandler } from './utils/utils';


export default function AlertCircle(props) {
  return <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height={sizeHandler(props)} width={sizeHandler(props)}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
}

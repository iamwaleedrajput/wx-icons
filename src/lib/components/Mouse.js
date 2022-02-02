import React from 'react';
import { sizeHandler } from '../utils/utils';

export default function Mouse(props) {
  return <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height={sizeHandler(props)} width={sizeHandler(props)}><path d="M3 5a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0V5zm5.5-1.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2z"></path></svg>
}

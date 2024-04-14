import React from 'react';
import { Tooltip as AntdTooltip } from 'antd';

export default function Tooltip({title}:{title: string}){
  return (
    <AntdTooltip title={title}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 15H16V22H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.75 12C16.5784 12 17.25 11.3284 17.25 10.5C17.25 9.67157 16.5784 9 15.75 9C14.9216 9 14.25 9.67157 14.25 10.5C14.25 11.3284 14.9216 12 15.75 12Z" fill="black"/>
      </svg>
    </AntdTooltip>
  )
}

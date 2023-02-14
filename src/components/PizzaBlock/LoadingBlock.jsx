import React from 'react';
import ContentLoader from "react-content-loader"

export function LoadingBlock() {
  return (<ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="123" r="123" />
    <rect x="17" y="270" rx="6" ry="6" width="246" height="24" />
    <rect x="17" y="315" rx="10" ry="10" width="246" height="85" />
    <rect x="17" y="420" rx="6" ry="6" width="90" height="27" />
    <rect x="134" y="413" rx="20" ry="20" width="130" height="40" />
  </ContentLoader>)
}
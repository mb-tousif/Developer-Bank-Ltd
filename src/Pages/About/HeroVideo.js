import React from 'react';
// import './video.css';
import Video from '../../Assets/video.mp4';

export default function HeroVideo() {
  return (
    <div className="">
    <div className="p-4">
        <video className="h-[300px]" src={Video} width="100%" controls/>
    </div>
    <div className=""></div>
</div>
  )
}

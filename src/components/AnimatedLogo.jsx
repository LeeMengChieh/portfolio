import React from 'react';
import img from '../utils/imgPath';

export default function AnimatedLogo() {
  return (
    <div className="logo">
      <img src={img('/imgs/state=Default.svg')} className="img img-a" alt="Logo" />
      <img src={img('/imgs/state=Hover.svg')} className="img img-b" alt="Logo Hover" />
    </div>
  );
}

import React from 'react';
import './categoriesMiniContainer.css';

export default function Btn({btnText}) {
  return (
<button className='btnMain bg-white text-black flex flex-row justify-center items-center gap-24 w-48 font-semibold h-11 border-black absolute'>
    <p>{btnText}</p>
    <i className="bi bi-arrow-right"></i>
</button>
  )
}

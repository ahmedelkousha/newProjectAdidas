import Btn from "./btn";

import React from 'react'

const CAT_IMAGES = [
    { url: "shoes1.jpg", title: "SHOES" },
    { url: "shoes5.jpg", title: "SHOES" },
    { url: "shirt1.jpg", title: "SHIRTS" },
    { url: "shirt2.jpg", title: "SHIRTS" },
    { url: "shirt1.jpg", title: "SHIRTS" }
  ];

export default function CategoriesMini() {
  return (
   <>
        {CAT_IMAGES.map((image, index)=>(
            <div key={index} className="categoriesMiniBox">
            <img className="object-cover" src={image.url} alt="" />
            <Btn key={image.title} btnText={image.title}/>
            </div>
        ))}
        </>
   
  )
}

"use client"


import { useState } from "react";
import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  const elements = ["Li","Ca","Na","Mg","Ba","Cu","K","Sr"]
  const [elementIndex, setElementIndex] = useState(0);
  
  const colors = ["red","orange","yellow","grey","green","skyblue","purple","red"]
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = (i)=> {
    setElementIndex(i);
    setColorIndex(i)
  }

  return (
   <div className="outer-most-container">
    <div className="scene-wrapper">
      <div className="scene-container">
        <ThreeScene color={colors[colorIndex]}></ThreeScene>
      </div>

      <div className="current-element">Current Element : {elements[elementIndex]}</div>


    </div>
    <div className="elements-grid">
      {elements.map((e,i)=>{
        return(
          <div key={i} className="grid-element" onClick={()=>{handleClick(i)}}>{e}</div>
        )
      })}
    </div>
   </div>
  );
}

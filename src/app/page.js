"use client"


import { useState } from "react";
import ThreeScene from "@/components/ThreeScene";

export default function Home() {

  const [elementIndex, setElementIndex] = useState(0);


  return (
   <div className="outer-most-container">
    <div className="scene-wrapper">
      <div className="scene-container">
        <ThreeScene></ThreeScene>
      </div>

      <div className="current-element">Current Element : </div>


    </div>
    <div className="elements-grid">
      <div className="grid-element">Li</div>
      <div className="grid-element">Ca</div>
      <div className="grid-element">Na</div>
      <div className="grid-element">Mg</div>
      <div className="grid-element">Ba</div>
      <div className="grid-element">Cu</div>
      <div className="grid-element">K</div>
      <div className="grid-element">Sr</div>
      <div className="grid-element"></div>
    </div>
   </div>
  );
}
